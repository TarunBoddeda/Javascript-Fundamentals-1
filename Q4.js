let numberOfChilds = 2;
let numberOfAdults = 1;
let numberOfSeniors = 1;

let priceOfChilds = 100;
let priceOfAdults = 150;
let priceOfSeniors = 120;

const totalTicketPriceofChild = (numberOfChilds =
  numberOfChilds * priceOfChilds);
const totalTicketPriceofAdults = (numberOfAdults =
  numberOfAdults * priceOfAdults);
const totalTicketPriceofSeniors = (numberOfSeniors =
  numberOfSeniors * priceOfSeniors);

const totalPrice =
  totalTicketPriceofAdults +
  totalTicketPriceofSeniors +
  totalTicketPriceofChild;

console.log(`The total ticket price is: ${totalPrice}`);
