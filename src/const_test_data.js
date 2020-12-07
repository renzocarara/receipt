// DESCRIPTION:
// this file contains predefined data, used to verify the program is working as expected.
// Data contains some inputs and the expected outputs the program should produce
// In the object below, each property, named "input_N" corresponds to a single test case.

export const TEST_DATA = {
  input_1: {
    predefinedInput: [
      { quantity: 2, origin: "", type: "book", price: 12.49 },
      { quantity: 1, origin: "", type: "music CD", price: 14.99 },
      { quantity: 1, origin: "", type: "chocolate bar", price: 0.85 },
    ],
    expectedSubtotal: [24.98, 16.49, 0.85],
    expctedTax: 1.5,
    expectedTotal: 42.32,
  },

  input_2: {
    predefinedInput: [
      {quantity: 1, origin: "imported", type: "box of chocolate", price: 10.0,},
      {quantity: 1, origin: "imported", type: "bottle of perfume", price: 47.50 },
    ],
    expectedSubtotal: [10.50, 54.65],
    expctedTax: 7.65,
    expectedTotal: 65.15,
  },
  
  input_3: {
    predefinedInput: [
      { quantity: 1, origin: "imported", type: "bottle of perfume", price: 27.99 },
      { quantity: 1, origin: "", type: "bottle of perfume", price: 18.99 },
      { quantity: 1, origin: "", type: "packet of headache pills", price: 9.75 },
      { quantity: 3, origin: "imported", type: "box of chocolates", price: 11.25 },
    ],
    expectedSubtotal: [32.19, 20.89, 9.75, 35.55],
    expctedTax: 7.90,
    expectedTotal: 98.38,
  },

  // //////////////////////////////////////////
  // // INSERT HERE MORE HARDCODED TEST DATA...
  // //////////////////////////////////////////

};