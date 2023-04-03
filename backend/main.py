# Code Citation for Sentence Transformers
#@inproceedings(reimers-2019-sentence-bert, title = "Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks", author = "Reimers, Nils and Gurevych, Iryna", booktitle = "Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing", month = "11", year = "2019", publisher = "Association for Computational Linguistics", url = "https://arxiv.org/abs/1908.10084")

# Capstone Group 5, ZoneIn Algorithm
# Author: Sarah Long, Anson Tu

from flask import Flask, request
import nltk
import nltk.data

nltk.download('punkt')
from sentence_transformers import SentenceTransformer, util

report = []
symptom = [{
  "symptom":
  "Often fails to give close attention to details or makes mistakes in schoolwork, at work, or during other activities. Overlooks or misses details, work is inaccurate."
}, {
  "symptom":
  "Often has difficulty sustaining attention in tasks or play activities. Has difficulty remaining focused during lectures, conversations, or lengthy reading."
}, {
  "symptom":
  "Often does not seem to listen when spoken to directly. Mind seems elsewhere, even in the absence of any obvious distraction."
}, {
  "symptom":
  "Often does not follow through on instructions and fails to finish schoolwork, chores, or duties in the workplace. Starts tasks but quickly loses focus and is easily sidetracked."
}, {
  "symptom":
  "Often has difficulty organizing tasks and activities. Difficulty managing sequential tasks, difficulty keeping materials and belongings in order, disorganized work, has poor time management, fails to meet deadlines."
}, {
  "symptom":
  "Often avoids, dislikes, or is reluctant to engage in tasks that require sustained mental effort like schoolwork, homework, preparing reports, completing forms, reviewing lengthy papers."
}, {
  "symptom":
  "Often loses things necessary for tasks or activities like school materials, pencils, books, tools, wallets, keys, paperwork, eyeglasses, mobile telephone."
}, {
  "symptom":
  "Is often easily distracted by external stimuli. Can include unrelated thoughts."
}, {
  "symptom":
  "Is often forgetful in daily activities like doing chores, running errands, returning calls, paying bills, keeping appointments."
}, {
  "symptom":
  "Often fidgets with or taps hands or feet or squirms in seat."
}, {
  "symptom":
  "Often leaves seat in situations where remaining seated is expected. Leaves his or her place in the classroom, in the office or other workplace, or in other situations that require remaining in place."
}, {
  "symptom":
  "Often runs about or climbs in situations where it is inappropriate. May be limited to feeling restless."
}, {
  "symptom":
  "Often unable to play or engage in leisure activities quietly."
}, {
  "symptom":
  "Is often 'on the go' acting as if 'driven by a motor'. Is unable to be or uncomfortable being still for an extended period of time, as in restaurants, meetings. May be experienced by others as being restless or difficult to keep up with."
}, {
  "symptom": "Often talks excessively."
}, {
  "symptom":
  "Often blurts out answers before a question has been completed. Completes people's sentences, cannot wait for turn in conversations."
}, {
  "symptom":
  "Often has difficulty waiting his or her turn like while waiting in line."
}, {
  "symptom":
  "Often interrupts or intrudes on others. Butts into conversations, games, activities, may start using other people's things without asking or receiving permission. May intrude or take over what others are doing."
}]

# Defined model data from Sentence-Transformers
model = SentenceTransformer('all-mpnet-base-v2')
# Other Models tested: all-MiniLM-L6-v2
model_data = 'tokenizers/punkt/english.pickle'


# Report Generation to send back
def generate_report(i_score, h_score, total_score, sentences):
  report_object = [{
    "inattentive": i_score,
    "hyperactive": h_score,
    "total": total_score,
    "sentences": sentences
  }]
  return report_object


# Data Assessment
def assess(arr1, arr2):
  result_r = ""
  result_s = ""
  # Turn JSON object into plain text field.
  for x in arr1:
    result_r += x['response']
    result_r += " "

  for y in arr2:
    result_s += y['symptom']
    result_s += " "

  # Define pre-set data model
  tokenizer = nltk.data.load(model_data)
  tokenizers = nltk.data.load(model_data)

  # Convert text fields to sentence arrays and encode arrays
  sentences = tokenizer.tokenize(result_r)
  symptoms = tokenizers.tokenize(result_s)

  embeddings = model.encode(sentences)
  embeddings2 = model.encode(symptoms)

  # Compute cosine similarity between pairs
  cos_sim = util.cos_sim(embeddings, embeddings2)

  # Add all pairs to an array with their cos_sim score
  all_sentence_combinations = []
  for i in range(len(cos_sim) - 1):
    for j in range(i + 1, len(cos_sim)):
      all_sentence_combinations.append([cos_sim[i][j], i, j])

  # Sort list by the highest cosine similarity score
  all_sentence_combinations = sorted(all_sentence_combinations,
                                     key=lambda x: x[0],
                                     reverse=True)

  # For generating report
  inattentive_Score = 0
  hyperactive_Score = 0
  reported_Sentences = []
  report = {}
  # Checks for relevant sentences using a metric of 50%
  # Symptoms Index: 0-15 = inattentive, 16+ = Hyperactive
  for score, k, l in all_sentence_combinations:
    if cos_sim[k][l] > 0.50:
      if symptoms.index(symptoms[l]) <= 15:
        inattentive_Score += 1
      elif symptoms.index(symptoms[l]) >= 16:
        hyperactive_Score += 1
      # Store relevant sentences in an array
      if sentences[k] in reported_Sentences:
        pass
      else:
        reported_Sentences.append(sentences[k])

  total = inattentive_Score + hyperactive_Score
  report = generate_report(inattentive_Score, hyperactive_Score, total,
                           reported_Sentences)
  return report


app = Flask(__name__)


# Main path used for ZoneIn Assessments
@app.route('/assessment', methods=['POST'])
def assessment():
  # Takes in JSON objects for each of the sets to compare.
  request_data = request.get_json()
  report = assess(request_data, symptom)
  print('Assessment complete.')
  return (report)


# Home page (Default Path)
# style="color:white; background-color:green;" <- for later
@app.route('/')
def index():
  return ('<h1 align="center" style="color:white; background-color:#006D77;">Welcome to ZoneIn</h1>')


app.run(host='0.0.0.0', port=3000)
