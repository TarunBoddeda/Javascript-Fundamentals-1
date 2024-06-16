let shippingCategoryBe = "Standard";

switch (shippingCategoryBe) {
  case "Standard":
    console.log("Your delievery will arrive 3-5 days");
    break;
  case "Express":
    console.log("Your delievery will arrive 1-2 days");
    break;
  case "OverNight":
    console.log("Your delievery will arrive at the next day");
    break;
  default:
    console.log("You shipping Category is Out of Bound!(Not Available)");
}
