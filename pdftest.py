# citations
#@inproceedings(reimers-2019-sentence-bert,
#    title = "Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks",
#    author = "Reimers, Nils and Gurevych, Iryna",
#    booktitle = "Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing",
#    month = "11",
#    year = "2019",
#    publisher = "Association for Computational Linguistics",
#    url = "https://arxiv.org/abs/1908.10084",
#)

from pdfminer.high_level import extract_text_to_fp # Install pdfminer
from pdfminer.layout import LAParams
from bs4 import BeautifulSoup # Install bs4
import nltk.data
import logging
from io import StringIO
import sys
import csv
import matplotlib.pyplot as plt
from sentence_transformers import SentenceTransformer, util # pip install -U sentence-transformers
model = SentenceTransformer('all-MiniLM-L6-v2')

logger = logging.getLogger(__name__)
show_progress_bar = (logger.getEffectiveLevel()==logging.INFO or logger.getEffectiveLevel()==logging.DEBUG)

def main():
	# Take in a filename as an argument, convert to string
	args = sys.argv[1:]
	dataFile = args[0]
	# Checks the last 4 characters of the filename to get the extension
	ext = dataFile[-4:]

	# Verify file extension
	if ext == '.pdf':
		# Convert PDF to HTML
		output_string = StringIO()
		with open(dataFile, 'rb') as fin:
			extract_text_to_fp(fin, output_string, laparams=LAParams(), output_type='html', codec=None)

		# Convert HTML to Plain Text
		htmlOutput = output_string.getvalue().strip()
		textOutput = BeautifulSoup(htmlOutput, features='html.parser')

		result = textOutput.get_text()

	elif ext == '.txt':
		# Read Text File
		fp = open(dataFile)
		result = fp.read()
		# TEST LINE #
		#print('\n\n'.join(tokenizer.tokenize(data)))

	else:
		print('Invalid File.')
		exit()
	
	# Define pre-set data model
	tokenizer = nltk.data.load('tokenizers/punkt/english.pickle')
	# Convert text to sentence array
	sentences = tokenizer.tokenize(result)

	# TEST LINE PLEASE REMOVE #
	# print('\nSentences:')
	# print('\n\n'.join(sentences))

	#Read symptoms text file and convert to sentence array
	fps = open('symptoms.txt')
	results = fps.read()
	tokenizers = nltk.data.load('tokenizers/punkt/english.pickle')
	symptoms = tokenizers.tokenize(results)
	
	# TEST LINE PLEASE REMOVE #
	# print('\nSymptoms:')
	# print('\n\n'.join(symptoms))

	#Encode sentence array(s)
	embeddings = model.encode(sentences)
	embeddings2 = model.encode(symptoms)

	#Compute cosine similarity between pairs
	cos_sim = util.cos_sim(embeddings, embeddings2)

	#Add all pairs to an array with their cos_sim score
	all_sentence_combinations = []
	for i in range(len(cos_sim)-1):
	    for j in range(i+1, len(cos_sim)):
	        all_sentence_combinations.append([cos_sim[i][j], i, j])

	#Sort list by the highest cosine similarity score
	all_sentence_combinations = sorted(all_sentence_combinations, key=lambda x: x[0], reverse=True)

	print("\nGenerated Report: \n")
	innatentive_Score = 5
	hyperactive_Score = 9
	for score, k, l in all_sentence_combinations:
		# Checks for relevant sentences using a metric of 36%
		# Symptoms Index: 0-15 = Innatentive, 16+ = Hyperactive
		if cos_sim[k][l] >= 0.36:
			if symptoms.index(symptoms[l]) <= 15:
				innatentive_Score+=1
			elif symptoms.index(symptoms[l]) >=16:
				hyperactive_Score+=1
			print("{} \t {} \t {} \n".format(sentences[k], symptoms[l], cos_sim[k][l]))

	# Calculate the dominant ADHD type from the given symptoms, and print results
	total_Score = innatentive_Score + hyperactive_Score
	resulting_text = "This is just a test."
	
	report_data = [innatentive_Score, hyperactive_Score]
	report_labels = 'Innatentive Symptoms', 'Hyperactive Symptoms'
	report_colors = ["#1b56b5", "#c91e12", "white"]
	plt.pie(report_data, labels=report_labels, colors =report_colors, startangle = 90, autopct='%1.1f%%')
	plt.title('Testemonial Results Breakdown')
	plt.legend()
	# plt.text(-2, -1, resulting_text, size=12, ha="left", va="bottom", bbox=dict(facecolor='white'))
	plt.show()

if __name__ == "__main__":
    main()
