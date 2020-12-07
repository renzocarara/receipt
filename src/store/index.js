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

    datofittizio: TEST_DATA,

  },
  getters: {},
  mutations: {
    initReceipts() {},
  },
});
