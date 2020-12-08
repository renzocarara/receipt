import Vue from "vue";
import Vuex from "vuex";
import { EXEMPT_CATEGORIES, BASIC_TAX, IMPORT_TAX } from "@/const_goods.js";
import { TEST_DATA, INITIAL_TESTCASE } from "@/const_test_data.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basicTax: BASIC_TAX,
    importTax: IMPORT_TAX,
    exemptCategories: EXEMPT_CATEGORIES,

    currentSelectedInput: INITIAL_TESTCASE, // name of 1st test case

    // predefined input/output
    inputs: TEST_DATA[INITIAL_TESTCASE].inputs, // test case inputs
    subtotal: TEST_DATA[INITIAL_TESTCASE].subtotal, // test case expexted outputs
    tax: TEST_DATA[INITIAL_TESTCASE].tax, // test case expexted outputs
    total: TEST_DATA[INITIAL_TESTCASE].total, // test case expexted outputs
  },

  //   getters: {
  //       GET_CURRENT_SELECTED_INPUT(state){
  //         return state.currentSelectedInput;
  //       }
  //  },

  mutations: {
    // INIT_RECEIPT(state) {
    //   // init some state variable
    //   state.inputs = TEST_DATA[state.currentSelectedInput].inputs;
    //   state.subtotal = TEST_DATA[state.currentSelectedInput].subtotal;
    //   state.tax = TEST_DATA[state.currentSelectedInput].tax;
    //   state.total = TEST_DATA[state.currentSelectedInput].total;
    // },

    SET_CURRENT_SELECTED_INPUT(state, value) {
      state.currentSelectedInput = value;
      state.inputs = TEST_DATA[value].inputs;
      state.subtotal = TEST_DATA[value].subtotal;
      state.tax = TEST_DATA[value].tax;
      state.total = TEST_DATA[value].total;
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
