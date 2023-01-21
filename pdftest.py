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
from sentence_transformers import SentenceTransformer, util # pip install -U sentence-transformers
model = SentenceTransformer('all-MiniLM-L6-v2')

logger = logging.getLogger(__name__)
show_progress_bar = (logger.getEffectiveLevel()==logging.INFO or logger.getEffectiveLevel()==logging.DEBUG)

def main():
	# Take in a filename as an argument, convert to string
	args = sys.argv[1:]
	dataFile = args[0]

	ext = dataFile[-4:]

	# Check file extension
	if ext == '.pdf':
		# Convert PDF to HTML
		output_string = StringIO()
		with open(dataFile, 'rb') as fin:
			extract_text_to_fp(fin, output_string, laparams=LAParams(), output_type='html', codec=None)

		# Convert HTML to Text
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

	# Convert text to sentence array
	tokenizer = nltk.data.load('tokenizers/punkt/english.pickle')
	sentences = tokenizer.tokenize(result)
	# TEST LINE #
	# print('\nSentences:')
	# print('\n\n'.join(sentences))

	#Read symptoms file and convert to sentences
	fps = open('symptoms.txt')
	results = fps.read()
	symptoms = tokenizer.tokenize(results)
	# TEST LINE #
	#print('\nSymptoms:')
	#print('\n\n'.join(symptoms))

	#Encode sentences
	embeddings = model.encode(sentences)
	embeddings2 = model.encode(symptoms)

	#Compute cosine similarity between all pairs
	cos_sim = util.cos_sim(embeddings, embeddings2)

	#Add all pairs to a list with their cosine similarity score
	all_sentence_combinations = []
	for i in range(len(cos_sim)-1):
	    for j in range(i+1, len(cos_sim)):
	        all_sentence_combinations.append([cos_sim[i][j], i, j])

	#Sort list by the highest cosine similarity score
	all_sentence_combinations = sorted(all_sentence_combinations, key=lambda x: x[0], reverse=True)

	#print("\nTop-5 most similar pairs:")

	for score, i, j in all_sentence_combinations:#[0:5]:
		print("{} \t {} \t {:.4f}".format(sentences[i], sentences[j], cos_sim[i][j]))

if __name__ == "__main__":
    main()


