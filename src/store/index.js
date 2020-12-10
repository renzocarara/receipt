import Vue from "vue";
import Vuex from "vuex";
import { EXEMPT_CATEGORIES, BASIC_TAX, IMPORT_TAX } from "@/const_goods.js";
import { TEST_DATA, INITIAL_TESTCASE } from "@/const_test_data.js";

Vue.use(Vuex);

// TEST_DATA is an object, copies in other variables are made by reference
// keep TEST_DATA as a BluePrint of the test cases data, do not coupled with STORE variables
let testDataClone = JSON.parse(JSON.stringify(TEST_DATA)); // deep clone predefined data

export default new Vuex.Store({
  state: {
    basicTax: BASIC_TAX,
    importTax: IMPORT_TAX,
    exemptCategories: EXEMPT_CATEGORIES, // list of goods exempted from basic tax

    currentSelectedInput: INITIAL_TESTCASE,
    checkExpectedOutput: true, // enable checks between input and expected output

    // predefined input
    inputs: testDataClone[INITIAL_TESTCASE].predefinedInputs,

    // predefiend exepected output
    subtotal: testDataClone[INITIAL_TESTCASE].subtotal,
    tax: testDataClone[INITIAL_TESTCASE].tax,
    total: testDataClone[INITIAL_TESTCASE].total,
  },

  mutations: {
    SET_CURRENT_SELECTED_INPUT(state, value) {
      state.currentSelectedInput = value;

      console.log(
        "\nSELECT inputs PRIMA DELL'ASSEGNAZIONE:",
        state.inputs,
        "\n\n"
      );

      console.log(
        "\nSELECT PRIMA: TEST_DATA[value].predefinedInputs:",
        TEST_DATA[value].predefinedInputs,
        "\n\n"
      );

      console.log("indice value:", value);
      console.log(
        "\nSELECT TEST_DATA[value].predefinedInputs:",
        TEST_DATA[value].predefinedInputs,
        "\n\n"
      );

      // create a clone to copy data in the STORE variable
      let clone = JSON.parse(JSON.stringify(TEST_DATA));
      state.inputs = clone[value].predefinedInputs;

      console.log("\nSELECT inputs DOPO L'ASSEGNAZIONE:", state.inputs, "\n\n");

      console.log(
        "\nSELECT DOPO: TEST_DATA['value'].predefinedInputs:",
        TEST_DATA[value].predefinedInputs,
        "\n\n"
      );

      state.subtotal = testDataClone[value].subtotal;
      state.tax = testDataClone[value].tax;
      state.total = testDataClone[value].total;
    },

    ADD_ENTRY(state, value) {
      console.log("nello store value:", value);
      let { quantity, origin, type, price } = value; // destructure received object

      console.log(
        "\nADD PRIMA: TEST_DATA['Input 2'].predefinedInputs:",
        TEST_DATA["Input 2"].predefinedInputs,
        "\n\n"
      );

      state.inputs.push({ quantity, origin, type, price });
      //   state.inputs.push(value);

      console.log(
        "\nADD DOPO: TEST_DATA['Input 2'].predefinedInputs:",
        TEST_DATA["Input 2"].predefinedInputs,
        "\n\n"
      );

      console.log("\nADD state.inputs:", state.inputs, "\n\n");
    },

    REMOVE_ENTRY(state, index) {
      // remove 1 element from 'index' position 1
      state.inputs.splice(index, 1);
    },

    SET_CHECK_EXPECTED_OUTPUT(state, value) {
      console.log(
        "state.checkExpectedOutput prima:",
        state.checkExpectedOutput
      );
      state.checkExpectedOutput = value;
      console.log("state.checkExpectedOutput dopo:", state.checkExpectedOutput);
    },

    SET_BASIC_TAX(state, value) {
      state.basicTax = value;
    },

    SET_IMPORT_TAX(state, value) {
      state.importTax = value;
    },

    SET_EXEMPT_CATEGORIES(state, value) {
      state.exemptCategories = value;
    },
  },
});
