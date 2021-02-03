**Focus:** Python and Machine Learning with Natural Language Processing Toolkit.

**Description:** Created a **world cloud** to display the **top 20** words used in the naming conventions of eduacational apps of over 1 Millon apps from Google Play and Apple App Store. The datasets where found individually on Kaggle and then merged together. Here is a snippit of the code:

```
# Libraries for Word Cloud

from os import path
from PIL import Image
from wordcloud import WordCloud, STOPWORDS, ImageColorGenerator

text = " ".join(word for word in edu_apps_df.app_name)
print('There are {} words in the app_names column'.format(len(text)))

edu_stopwords = set(STOPWORDS)
wordcloud = WordCloud(stopwords=edu_stopwords, max_words=20, background_color='lightblue').generate(text)

# display

plt.figure( figsize=(20,10) )
plt.imshow(wordcloud, interpolation='bilinear')
plt.axis("off")
plt.show()

```

....![Image](data_science/images/AppName_WorldC.png)
