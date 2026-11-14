// NHL Positivity Index — project data.
// Auto-collected by src/data/projects/index.ts (newest year folder first,
// then by filename prefix — use 01-, 02- … to control card order).

import type { Project } from "@/data/_types";

export default {
  slug: "nhl-positivity-index",
  name: "NHL Positivity Index",
  tagline: "Quantifying fan sentiment using fine-tuned RoBERTa models.",
  description: "This project quantitatively assesses how positive or negative an NHL fanbase feels over a given period using natural language processing and sentiment analysis.",
  tag: "Data Science",
  color: "blue",
  stack: [
    "RoBERTa",
    "Python",
    "Sentiment Analysis",
    "Reddit API",
  ],
  details: "A comprehensive measure of fanbase sentiment achieved by dissecting the tone and mood of Reddit discussions.",
  difficulty: "Advanced (NLP and Sentiment Analysis)",
  termLength: "Summer 2024",
  isPast: true,
  year: "2024–25",
  source: "https://github.com/UndergraduateArtificialIntelligenceClub/NHL-Positivity-Index",
  lead: {
    name: "Jacob Winch",
    role: "Project Lead",
    linkedin: "https://www.linkedin.com/in/jacob-winch/",
  },
  members: [
    "Tanmay Munjal",
    "Heiby Lau",
    "Alexander Bradley",
    "Arden Monaghan",
    "Yukesh Subedi",
    "William Luo",
  ],
  gallery: [
    "/images/NHL_Positivity_Index/apr1_apr18_dashboard.png",
    "/images/NHL_Positivity_Index/draft_24_dashboard.png",
    "/images/NHL_Positivity_Index/feb16_feb29_dashboard.png",
    "/images/NHL_Positivity_Index/feb1_feb15_dashboard.png",
    "/images/NHL_Positivity_Index/mar16_mar31_dashboard.png",
    "/images/NHL_Positivity_Index/mar1_mar15_dashboard.png",
  ],
  content: {
    type: "readme",
    body: `We were inspired by the engaging and insightful ["Panic Index"](https://www.youtube.com/playlist?list=PL4KmQCGTJmgz9urZusFDiGC9Bzh2S67gM) series by YouTuber Shannon Skanes, also known as the Hockey Guy, where he ranks NHL teams based on their perceived level of panic at key moments throughout the season. Intrigued by this unique perspective on team performance, we wondered: Could we quantify the underlying sentiment of NHL fanbases in a similar vein? Thus, the NHL Positivity Index was born. Our project aims to quantitatively assess how positive or negative an NHL fanbase feels over a given period using artificial intelligence techniques. Specifically, we leverage an AI technique called natural language processing and sentiment analysis to analyze fan discussions. By dissecting the tone and mood from Reddit, we seek to provide a comprehensive measure of fanbase sentiment.

---

## The Data
The data is collected from Reddit. We extract comments from each NHL team’s subreddit. In particular, we extracted comments from the game day, pre-game, and post-game threads or threads of similar nature in each team’s subreddit. We did this to try and ensure that we have similar data from every team in the NHL. We also felt that posts under the pre-, post-, and game-day threads were the most authentic way to gauge general fan sentiment. To extract the comments we used [PRAW](https://praw.readthedocs.io/en/stable/), Python’s Reddit API Wrapper.

## Creation of a Training & Testing Dataset
With the hopes of improving the accuracy of [**cardiffnlp/twitter-roberta-base-sentiment-latest**](https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment-latest). We manually labelled a random sample of 6168 comments from December 1st, 2023 to December 15th, 2023 from all NHL team’s subreddits. Once those comments were labelled we verified the answers with disagreements with cardiffnlp's, twitter-roberta-base-sentiment-latest model and with other members of the team. We split the 6168 comments into a training and testing set with 5168 and 1000 comments respectively.

## Fine-tuning the Model
With the help of Hugging Face's PEFT: Parameter-Efficient Fine-Tuning library we were able to effectively fine-tune [**cardiffnlp/twitter-roberta-base-sentiment-latest**](https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment-latest). After fine-tuning, our Adapter model for [**cardiffnlp/twitter-roberta-base-sentiment-latest**](https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment-latest), [Chelberta](https://huggingface.co/UAlbertaUAIS/Chelberta) achieved an accuracy score of 81.2% improving from the base model of 79.2% on our testing dataset mentioned above.

---

## Future Work
Some examples of future work can include extending this project to future sports. Additionally, there can be further improvements to our current project such as improving the sentiment analysis model or incorporating more aspects of an NHL team’s subreddit. One aspect that we are actively working on is a time series plot for each NHL team displaying the changes to their positivity score overtime.`,
  },
} satisfies Project;
