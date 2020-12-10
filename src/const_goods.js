// DESCRIPTION:
// this file contains constant values
// goods types are classified in 4 different categories:
//      - food
//      - book
//      - medical
//      - other
// "food", "book" and "medical" categories are "basic tax" exempt
// "other" category is "basic tax" liable

// list of goods and associated category
export const GOODS_AND_CATEGORIES = {
         // 'goods type' : 'goods category'
         "packet of headache pills": "medical",
         "chocolate bar": "food",
         "box of chocolates": "food",
         "bottle of perfume": "other",
         "music CD": "other",
         book: "book",
       };

// possible origins of the goods
export const ORIGINS = [ "local", "imported"];

// list of all goods types
export const GOODS = Object.keys(GOODS_AND_CATEGORIES);

// goods categories exempt from "basic tax"
export const EXEMPT_CATEGORIES = ['medical','food','book'];

// taxes percentage
export const BASIC_TAX = 10; // 10%
export const IMPORT_TAX = 5; // 5%