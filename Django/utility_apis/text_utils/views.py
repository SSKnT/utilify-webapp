from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lsa import LsaSummarizer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from textblob import TextBlob
from random import choice



@api_view(['POST'])
def summarize_text(request):
    text = request.data.get('text')
    sentences_count = int(request.data.get('sentences_count', 5))

    if not text:
        return Response({'error': 'No text provided'}, status=400)

    parser = PlaintextParser.from_string(text, Tokenizer("english"))
    summarizer = LsaSummarizer()
    summary_sentences = summarizer(parser.document, sentences_count)
    
    summary = ' '.join(str(sentence)for sentence in summary_sentences)

    return Response({'summary': summary}, status=200) 
    

@api_view(['POST'])
def analyze_text(request):
    text = request.data.get('text')
    language = request.data.get('language', 'english')

    if not text:
        return Response({'error': 'No text provided'}, status=400)

    blob = TextBlob(text)
    polarity = blob.sentiment.polarity
    subjectivity = blob.sentiment.subjectivity

    if polarity > 0.5:
        sentiment = 'very positive'
    elif 0 < polarity <= 0.5:
        sentiment = 'positive'
    elif -0.5 <= polarity < 0:
        sentiment = 'negative'
    else:
        sentiment = 'very negative'
    
    result = {
        'sentiment': sentiment,
        'polarity': polarity,
        'subjectivity': subjectivity
    }

    return Response(result, status=200)


FORTUNES = [
    "A difficult decision will need to be made soon.",
    "A friend is a present you give yourself.",
    "Love is in the air. Keep your heart open.",
    "You will find great success in the near future.",
    "A surprise awaits you around the corner.",
    "Be cautious of new opportunities; some may be traps.",
    "Your hard work will soon pay off.",
    "Expect some challenges ahead, but you will overcome them.",
    "Your future is bright, but patience is needed.",
    "Big changes are coming, and they will be for the better.",
    "You will soon face a difficult challenge.",
    "A friend will betray you soon.",
    "You will soon lose something important to you.",
    "You will soon be struck by lightning.",
    "You will soon be eaten by a bear.",
    "You will soon be struck by a meteorite.",
]

SPECIAL_FORTUNES = [
    "Your love life is like a Wi-Fi signal—weak and barely detectable in public places.",
    "Good news: someone will ask for your number this month! Bad news: it's probably customer service.",
    "Your social life will thrive… online, because that's about as far as you want to go these days.",
    "You're destined to be wildly successful… at hitting 'snooze' three times tomorrow morning.",
    # more negative and demeaning fortunes:
    "You will buy a single bed after marriage.",
]

@api_view(['POST'])
def get_fortune(request):
    name = request.data.get('name')
    age = request.data.get('age')

    if not name:
        return Response({'error': 'No name provided'}, status=400)

    if name in ['daniyal', 'Daniyal', 'abd', 'Abd', 'abdul rehman', 'Abdul Rahman', 'abdulrehman']:
        fortune = choice(SPECIAL_FORTUNES)
    elif int(age) > 60:
        fortune = "You already have one foot in the grave. Why bother with fortunes?"
    else:
        fortune = choice(FORTUNES)


    return Response({'fortune': fortune}, status=200)