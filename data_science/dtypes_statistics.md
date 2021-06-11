# Data Types in Statistics

**Goal:** To understand different data types in order to correctly apply statistical measurements to data and do proper exploratory data analysis (EDA) which are vital parts of a machine learning project. In addition, knowing which data types you are dealing with will allow you to choose the right visualization method.

Data types are a way to categorize different types of variables.

- **Categorical Data**

  - gender
  - language
  - categorical data can also take on numerical values i.e 1 dog 0 cat, yes - 1 no - 0

- **Nominal Data**

  - represents discrete units
  - used to label variables with no quantitative value
  - "labels"
  - nominal data has no order
  - i.e Are you Single? Yes/No
    -Also called dichotomous - only 2 categories
  - i.e What languges do you speak? English/French/German/Spanish

- **Ordinal Data**

  - discrete and ordered units
  - almost the same as nominal data except ORDERING matters
  - usually used to measure non-numeric features like happiness customer statisfaction etc.
  - i.e What is your educational background?
    - 1. elementary 2) high school 3) undergraduate 4)graduate

- **Numerical Data**
  - values that are distinct and seperate
  - data can only take on certain values
  - can't be measured but it can be counted
  - represents information that can be categorized into a classification
  - i.e number of head in 100 coin flips
  - you can check if it is discrete data by asking yourself two questions.
    1.) Can you count it?
    2.) Can it be divided up into smaller and smaller parts?
- **Continuous Data**
  - measurements where there values can't be counted but they can be measured.
  - can be measured to many decimal places
  - i.e height of a person, weight of a car, temperature, speed of airplane, age of a person, price of a ticket
  - can be described by using intervals on the real number line
  - Continuous variable can theoretically take infinitely many values in a given range

[Reference:](https://towardsdatascience.com/data-types-in-statistics-347e152e8bee)

# Machine Learning Connection

- Using k-nearest neighbors (KNN)

  - classification problems
  - regression problems

- k-NN Classification

  - prediciting a **categorical outcome**
  - NOTE: When the outcome is CATEGORICAL
  - k-NN classification invovles calculating distances between datapoints therefore **numerical variables** must be used
  - this applied ONLY to the predictor variables
  - the outcome variable should remain a categorical variable
  - variety of ways to pick value k
    - one way is by using the square root rule of thumb
    - k value is approximately the square root of the sample size
  - Always **scale** features in case features are on different metrics

- k-NN Regression
  - predicing a **continuous outcome**
  - NOTE: When the outcome is CONTINUOUS
  - involves calculating distances between datapoints
  - only numeric varaibles for k-NN regression
    - this applies to the predictor variables and the outcome variable. Both should already be numeric variables.
  - Always **scale** features in case features are on different metrics
  - works to predict new values from a continuous distribution for unprecedented feature values
  - takes the average value of it's k-nearest neighbors
