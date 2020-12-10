<template>
  <div class="">

    <h3>Computed Output</h3>
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

        // calculate the output, return an object with 2 arrays
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
                console.log("category: ",category);

                // check if the item category is not in the list of exemptions
                if (!this.$store.state.exemptCategories.includes(category)) {
                    basicTax = inputs[i].price * this.$store.state.basicTax/100;
                    console.log("basicTax non arrotondato", basicTax);

                    // round up to the nearest 0.05
                    basicTax = (Math.ceil(basicTax*20)/20).toFixed(2);
                    console.log("basicTax ARROTONDATO", basicTax);
                
                }
                // calculate total "basic tax" for the item    
                basicTax = basicTax * inputs[i].quantity;
                console.log("basicTax x qty", basicTax);

                // verify if item is "imported", in case "import tax" is to be added
                if (inputs[i].origin=="imported"){
                    importTax = inputs[i].price * this.$store.state.importTax/100;
                    console.log("imporTax non arrotondato", importTax);

                    // round up to the nearest 0.05
                    importTax = (Math.ceil(importTax*20)/20).toFixed(2);
                    console.log("importTax ARROTONDATO", importTax);
                }
                // calculate total "import tax" for the item    
                importTax = ((importTax*100) * inputs[i].quantity)/100;
                console.log("importTax x qty",importTax);

                // push calculated tax in the array
                subTax.push(basicTax + importTax);
                console.log("subTax[i] basic+import",subTax[i]);

                // push calculated subtotal plus taxes in the array
                subtotals.push(inputs[i].price * inputs[i].quantity + subTax[i]);
                console.log("subtotals[i] tassato: ",inputs[i].price * inputs[i].quantity + subTax[i]);
            }
            
            return {subtotals, subTax};
            }, 

        // calculate the output    
        totalTax() {
             if (this.subs.subTax.length){
                // return the sum of all subtotals in the array
                return this.subs.subTax.reduce(this.sumArrayElements);            
            } else{
                // empty array
                return 0;
            }
        },

        // calculate the output    
        totalPrice() {
            if (this.subs.subtotals.length){
                // return the sum of all subtotals in the array
                return this.subs.subtotals.reduce(this.sumArrayElements);
            } else{
                // empty array
                return 0;
            }
        },
     },
}
</script>