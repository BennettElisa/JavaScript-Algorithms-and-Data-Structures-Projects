# A/B Testing with Python

Senario:

- Owner of a resaturant whats to increase customer satisfaction. There is a regular menu of 3 main dishes and 1 dessert and espresso coffee.

- The owner wants to to test an alternative menu.

- They keep all 3 main dishes and changes out the dessert for a new one and also keeps the espresso coffee.

Treatment: The new dessert is the "treat" ... ment :)

When we talk talk about experiments and causality we use special names for our variables and the most IMPORTANT is the **treatment** which is something that is **given** or **taken** from the customer.

        - Absence of treatment is the staus quo (Control Group)
        - Treatment is the new thing (Treatment Group)
        - Other variables are **Covariates**
            - Varaiable that happen at the same time as the treatment and could have an impact on the response variable.
            - You want to control them and remove bisas
            - We can control for the covariants by not changing anything else on the menu

This is main difference between **correlation** and **causation**.

Correlation - You are an external observer of the information - Positive or negative correlations but you can't CHANGE anything

Causation - You can **intervine** and change things and see what happens - You can find out the direction of causality.

Back to the senario! So the resturant owner is going to test her treatment with a **Likert Scale** which tends to be an agreement to a statment of five points such as:

    1.) Strongly disagree
    2.) Disagree
    3.) Neither agree nor diagree
    4.) Agree
    5.) Strongly agree

You don't want your variables to be **CONFOUNDED**

If you can control the varibale they are **Covariantes**
If you can't control the variables they are **omitted variables**

The solution to this A/B testing would be to \*_Randomize the Treatment_

Balancing the samples with t-test

Causal effect is the difference between the control group and the treatment group.
