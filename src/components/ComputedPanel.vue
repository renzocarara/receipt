<template>
  <div class="">

    <h2>Computed Output</h2>
    <div v-for="(entry, index) in getInputs" :key="index" class="pl-2" :class='index%2 ? "bgc-stripe-1" : "bgc-stripe-2"' >
        <v-icon v-if="isMedical(entry.type)" color="#9FC500 mr-1 ml-2" >mdi-medical-bag</v-icon>
        <v-icon v-if="isFood(entry.type)" color="#9FC500 mr-1 ml-2" >mdi-food</v-icon>
        <v-icon v-if="isBook(entry.type)" color="#9FC500 mr-1 ml-2" >mdi-book-open-page-variant</v-icon>

        {{ entry.quantity }}
        {{ entry.origin!="" ? entry.origin : "" }}
        {{ entry.type }} 
        : {{ subs.subtotals[index].toFixed(2) }}

        <template  v-if="doCheck" >
            <v-icon v-if="subs.subtotals[index].toFixed(2) == getSubtotal[index].toFixed(2)" color="green">mdi-check-bold</v-icon>
            <v-icon v-else color="red">mdi-close-thick</v-icon>
        </template> 
    </div>
    <br>
    <strong>Sales Taxes: {{ totalTax.toFixed(2) }}</strong>
    <template v-if="this.$store.state.checkExpectedOutput == true">
        <v-icon v-if="totalTax.toFixed(2) == getTax" color="green">mdi-check-bold</v-icon>
        <v-icon v-else color="red">mdi-close-thick</v-icon>
    </template> 
    <br>

    <strong>Total: {{ totalPrice.toFixed(2) }}</strong>
    <template v-if="this.$store.state.checkExpectedOutput == true">
        <v-icon v-if="totalPrice.toFixed(2) == getTotal" color="green">mdi-check-bold</v-icon>
        <v-icon v-else color="red">mdi-close-thick</v-icon>
    </template> 


  </div>
</template>

<script>
import { GOODS_AND_CATEGORIES } from "@/const_goods.js";

export default {
  name: 'ExpectedPanel',

  methods:{
      // used to call reduce() on arrays (return the sum of all elements)
      sumArrayElements(total, num) {
         return total + num;
      },
      isMedical(type){
         return GOODS_AND_CATEGORIES[type]=='medical';
      },
      isFood(type){
         return GOODS_AND_CATEGORIES[type]=='food';
      },
      isBook(type){
         return GOODS_AND_CATEGORIES[type]=='book';
      },
      nDecimals(number, n){
          // DESCRIPTION:
          // receive 2 parameters, the number to be truncated and the number of decimals to keep
          // return a number with max "n" decimals
          // similar to toFixed() function but with no rounding
          // toFixed():  (34.678).toFixed(2)  --->   34.68 (rounded!)
          // nDecimals(34.678, 2)  --->  34.67
          let decimals ="";
          let string = number.toString();
          let pointPosition = string.indexOf('.');
          if(pointPosition != -1){ // number with some decimals
            decimals = string.slice(pointPosition + 1, pointPosition + n + 1); // extract max "n" chars
                // extract the integer part and concatenates it with decimal part
                return  parseFloat(string.slice(0, pointPosition) + '.' + decimals); 
          } else { // number with no decimals
                return number; 
          }
        }
   },
  computed: {
        // indicates if check between input and expected output have to be done
        // when input is chanaged by user (add/delete entries) this check is not performed
        doCheck(){
            return this.$store.state.checkExpectedOutput;
        },
        // read from the Store the predefined input
        getInputs(){
             return this.$store.state.inputs;
        },
        // read from the Store the expected ouput to be comapared with computed output
        getTax(){
             return this.$store.state.tax;
        },
        // read from the Store the expected ouput to be comapared with computed output
        getSubtotal(){
             return this.$store.state.subtotal;
        },
        // read from the Store the expected ouput to be comapared with computed output
        getTotal(){
             return this.$store.state.total;
        },

        // compute the output, return an object with 2 arrays
        // one for the taxes values for every single subtotal
        // one with every single subtotal with taxes already added
        subs(){
            let inputs = this.getInputs; 
            let subtotals=[]; // store subtotals with taxes already added
            let subTax=[]; // store tax for every single subtotal entry

            for(let i=0; i<inputs.length; i++)   {
                let basicTax=0;  // store the calculated value for "basic tax" for a single subtotal entry
                let importTax=0; // store the calculated value for "import tax" for a single subtotal entry

                // verify if item is exempt otherwise "basic tax" is to be added
                let category = GOODS_AND_CATEGORIES[inputs[i].type];

                // check if the item category is not in the list of exemptions
                if (!this.$store.state.exemptCategories.includes(category)) {

                    // NOTE: consider only 2 decimals on calculated tax, so if it is less than 0.01
                    // (i.e 0.005, 0.001, etc) value is considered as 0.00
                    // NOTE2: toFixed() applies a rounding before truncate, so at example:
                    // 0.001.toFixed(2) ---> 0.00
                    // 0.007.toFixed(2) ---> 0.01  rounded!!
                    basicTax = (inputs[i].price * this.$store.state.basicTax/100);

                    // insteaad of toFixed() use a custom function that keep decimals as they are, no rounding
                    basicTax = this.nDecimals(basicTax,2); // keeps 2 decimals

                    // round up to the nearest 0.05
                    basicTax = (Math.ceil(basicTax*20)/20).toFixed(2);
                }
                    // calculate total "basic tax" for the item    
                    basicTax = basicTax * inputs[i].quantity;

                    // verify if item is "imported", in case "import tax" is to be added
                    if (inputs[i].origin=="imported"){
                        // NOTE: consider only 2 decimals on calculated tax, so if it is less than 0.01
                        // (i.e 0.005, 0.001, etc) value is considered as 0 (tax applied will be zero)
                        importTax = (inputs[i].price * this.$store.state.importTax/100);

                        importTax = this.nDecimals(importTax,2); // keeps 2 decimals

                        // round up to the nearest 0.05
                        importTax = (Math.ceil(importTax*20)/20).toFixed(2);
                }
                // calculate total "import tax" for the item    
                importTax = ((importTax*100) * inputs[i].quantity)/100;

                // push calculated tax in the array
                subTax.push(basicTax + importTax);

                // push calculated subtotal plus taxes in the array
                subtotals.push(inputs[i].price * inputs[i].quantity + subTax[i]);
            }
            
            return {subtotals, subTax}; 
            }, 

        // calculate the output  "Sales taxes"   
        totalTax() {
             if (this.subs.subTax.length){
                // return the sum of all subtotals in the array
                return this.subs.subTax.reduce(this.sumArrayElements);            
            } else{
                // empty array
                return 0; // the input panel has no entries
            }
        },

        // calculate the output  "Total"  
        totalPrice() {
            if (this.subs.subtotals.length){
                // return the sum of all subtotals in the array
                return this.subs.subtotals.reduce(this.sumArrayElements);
            } else{
                // empty array
                return 0; // the input panel has no entries
            }
        },
     },
}
</script>