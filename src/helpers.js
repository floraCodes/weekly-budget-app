export const reviewBudget = (budget, avaliableBudget) => {
  let category;

  if (budget / 4 > avaliableBudget) {
    category = "alert alert-danger";
  } else if (budget / 2 > avaliableBudget) {
    category = " alert alert-warning";
  } else {
    category = "alert alert-success";
  }

  return category;
};
