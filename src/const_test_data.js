// DESCRIPTION:
// this file contains predefined data, used to verify the program is working as expected.
// Data contains some inputs and the expected outputs the program should produce
// In the object below, each property, named "input N" corresponds to a single test case.

export const TEST_DATA = {
         "Input 1": {
           predefinedInputs: [
             // these are the inputs data
             { quantity: 2, origin: "", type: "book", price: 12.49 },
             { quantity: 1, origin: "", type: "music CD", price: 14.99 },
             { quantity: 1, origin: "", type: "chocolate bar", price: 0.85 },
           ],
           // these are the expected outputs
           subtotal: [24.98, 16.49, 0.85],
           tax: 1.5,
           total: 42.32,
         },

         "Input 2": {
           predefinedInputs: [
             {
               quantity: 1,
               origin: "imported",
               type: "box of chocolates",
               price: 10.0,
             },
             {
               quantity: 1,
               origin: "imported",
               type: "bottle of perfume",
               price: 47.5,
             },
           ],
           subtotal: [10.5, 54.65],
           tax: 7.65,
           total: 65.15,
         },

         "Input 3": {
           predefinedInputs: [
             {
               quantity: 1,
               origin: "imported",
               type: "bottle of perfume",
               price: 27.99,
             },
             {
               quantity: 1,
               origin: "",
               type: "bottle of perfume",
               price: 18.99,
             },
             {
               quantity: 1,
               origin: "",
               type: "packet of headache pills",
               price: 9.75,
             },
             {
               quantity: 3,
               origin: "imported",
               type: "box of chocolates",
               price: 11.25,
             },
           ],
           subtotal: [32.19, 20.89, 9.75, 35.55],
           tax: 7.9,
           total: 98.38,
         },

         // /////////////////////////////////////////////
         // // INSERT HERE MORE HARDCODED TEST DATA... //
         // /////////////////////////////////////////////

       }; 
       
       export const INITIAL_TESTCASE = Object.keys(TEST_DATA)[0];  // name of the 1st test case
  
