import Vue from "vue";
import Vuex from "vuex";
import { EXEMPT_CATEGORIES, BASIC_TAX, IMPORT_TAX } from "@/const_goods.js";
import { TEST_DATA, INITIAL_TESTCASE } from "@/const_test_data.js";

Vue.use(Vuex);

// TEST_DATA is an object, so copying it in other variables is made by reference
// keep TEST_DATA as a BluePrint of the test cases data, do not couple it with STORE variables
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

    // predefind exepected output
    subtotal: testDataClone[INITIAL_TESTCASE].subtotal,
    tax: testDataClone[INITIAL_TESTCASE].tax,
    total: testDataClone[INITIAL_TESTCASE].total,
  },

  mutations: {
    SET_CURRENT_SELECTED_INPUT(state, value) {
      state.currentSelectedInput = value;

      // create a clone to copy data in the STORE variable
      let clone = JSON.parse(JSON.stringify(TEST_DATA));
      state.inputs = clone[value].predefinedInputs;

      state.subtotal = testDataClone[value].subtotal;
      state.tax = testDataClone[value].tax;
      state.total = testDataClone[value].total;
    },

    ADD_ENTRY(state, value) {
      let { quantity, origin, type, price } = value; // destructure received object
      state.inputs.push({ quantity, origin, type, price }); // insert data in STORE
    },

    REMOVE_ENTRY(state, index) {
      // remove 1 element at 'index' position
      state.inputs.splice(index, 1);
    },

    SET_CHECK_EXPECTED_OUTPUT(state, value) {
      state.checkExpectedOutput = value;
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
