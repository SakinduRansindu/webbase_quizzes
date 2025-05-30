export default [
  {
    question: "What is the general form of a multiple linear regression model with k predictors?",
    code: "",
    choices: [
      "y = β₀ + β₁x₁ + ε",
      "y = β₀ + β₁x₁ + β₂x₂ + ... + βₖxₖ + ε",
      "y = β₀x₁ + β₁x₂ + β₂x₃ + ... + βₖxₖ",
      "y = β₀ + β₁x₁x₂ + β₂x₃ + ε"
    ],
    correct: 1,
    justification: "The general multiple linear regression model is y = β₀ + β₁x₁ + β₂x₂ + ... + βₖxₖ + ε, where each βᵢ is a partial regression coefficient for predictor xᵢ. Option 0 is the simple linear regression form, and option 2 omits the intercept and uses incorrect notation. Option 3 introduces an interaction term not present in the standard model.[2]"
  },
  {
    question: "In a multiple regression model, what does the coefficient β₁ represent?",
    code: "",
    choices: [
      "The effect of x₁ on y, holding all other variables constant",
      "The effect of x₁ on y, ignoring other variables",
      "The intercept of the regression surface",
      "The error term in the model"
    ],
    correct: 0,
    justification: "β₁ is the partial regression coefficient for x₁, representing the change in y for a one-unit increase in x₁, holding all other variables constant. Option 1 describes simple regression, option 2 is the intercept, and option 3 is the error term.[2]"
  },
  {
    question: "If the coefficient for 'House_Age_Years' in a regression model is -6.66, how should it be interpreted?",
    code: "",
    choices: [
      "Each additional year increases the house price by $6,660.",
      "Each additional year decreases the house price by $6,660, holding size constant.",
      "Each additional year has no effect on house price.",
      "Each additional year decreases the house price by $6.66, holding size constant."
    ],
    correct: 1,
    justification: "A negative coefficient means an inverse relationship: for each additional year, the price decreases by $6,660 (since the units are in thousands), holding other variables constant. Option 0 reverses the sign, option 2 ignores the coefficient, and option 3 uses the wrong scale.[1]"
  },
  {
    question: "Which assumption is NOT required for multiple linear regression?",
    code: "",
    choices: [
      "Linearity between predictors and response",
      "Homoscedasticity of residuals",
      "Independence of observations",
      "Perfect correlation among predictors"
    ],
    correct: 3,
    justification: "Multiple regression assumes linearity, homoscedasticity, and independence, but does NOT require perfect correlation among predictors. In fact, high multicollinearity (high correlation) is undesirable.[1]"
  },
  {
    question: "What does an R-squared value of 0.74 indicate in a multiple regression model?",
    code: "",
    choices: [
      "74% of the variation in the dependent variable is explained by the predictors.",
      "The model is overfitted.",
      "The predictors are not statistically significant.",
      "74% of the predictors are significant."
    ],
    correct: 0,
    justification: "R-squared measures the proportion of variance in the dependent variable explained by the model. It does not directly indicate overfitting or predictor significance.[1]"
  },
  {
    question: "Which of the following is a method to check for multicollinearity in a regression model?",
    code: "",
    choices: [
      "Durbin-Watson test",
      "Variance Inflation Factor (VIF)",
      "Q-Q plot",
      "Residuals vs Fitted plot"
    ],
    correct: 1,
    justification: "Variance Inflation Factor (VIF) is used to detect multicollinearity among predictors. The Durbin-Watson test checks for autocorrelation, Q-Q plot for normality, and residuals vs fitted for homoscedasticity.[1]"
  },
  {
    question: "Why is the intercept (constant) in a multiple regression model often not meaningful in practical terms?",
    code: "",
    choices: [
      "Because it represents the predicted value of y when all predictors are zero, which may not be realistic.",
      "Because it always equals zero.",
      "Because it measures the effect of all predictors together.",
      "Because it is always negative."
    ],
    correct: 0,
    justification: "The intercept is the expected value of y when all predictors are zero, which often lacks practical meaning (e.g., a house with zero size and age).[1]"
  },
  {
    question: "If the residuals from a regression model show a funnel shape in the residuals vs fitted plot, what assumption is likely violated?",
    code: "",
    choices: [
      "Linearity",
      "Normality",
      "Homoscedasticity",
      "Independence"
    ],
    correct: 2,
    justification: "A funnel shape indicates heteroscedasticity, meaning the variance of residuals is not constant (violation of homoscedasticity). Linearity and normality are checked differently.[1]"
  },
  {
    question: "What is the purpose of the Q-Q plot in regression diagnostics?",
    code: "",
    choices: [
      "To check for multicollinearity",
      "To assess normality of residuals",
      "To test for independence of errors",
      "To visualize the linearity between predictors and response"
    ],
    correct: 1,
    justification: "The Q-Q plot is used to assess whether residuals are approximately normally distributed. Multicollinearity is checked with VIF, independence with Durbin-Watson, and linearity with residuals vs fitted plots.[1]"
  },
  {
    question: "A multiple regression model for house price yields an adjusted R-squared much lower than R-squared. What does this suggest?",
    code: "",
    choices: [
      "The model is likely overfitting by including irrelevant predictors.",
      "The predictors are all highly significant.",
      "The model fits the data perfectly.",
      "There is no multicollinearity."
    ],
    correct: 0,
    justification: "A large gap between R-squared and adjusted R-squared suggests overfitting, meaning some predictors do not improve the model and may be irrelevant. It does not imply significance or absence of multicollinearity.[1]"
  }
]
