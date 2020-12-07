import Vue from "vue";
import Vuex from "vuex";
import { EXEMPT_CATEGORIES, BASIC_TAX, IMPORT_TAX } from "@/const_goods.js";
import { TEST_DATA } from "@/const_test_data.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basicTax: BASIC_TAX,
    importTax: IMPORT_TAX,
    exemptCategories: EXEMPT_CATEGORIES,

    currentSelectedInput: "Input 1",

    // predefined input/output
    inputs: TEST_DATA["Input 1"].inputs,
    subtotal: TEST_DATA["Input 1"].subtotal,
    tax: TEST_DATA["Input 1"].tax,
    total: TEST_DATA["Input 1"].total,
  },

  getters: {
      // la uso????
    // GET_CURRENT_SELECTED_INPUT(state) {
    //   return state.currentSelectedInput;
    // },
  },

  mutations: {
    //   INIT_RECEIPT() {
    //     // inizializza inputs, expSubtotal, etc..
    //   },
    SET_CURRENT_SELECTED_INPUT(state, value) {
      state.currentSelectedInput = value;
      state.inputs = TEST_DATA[value].inputs;
      state.subtotal = TEST_DATA[value].subtotal;
      state.tax = TEST_DATA[value].tax;
      state.total = TEST_DATA[value].total;
    },
  },
});
