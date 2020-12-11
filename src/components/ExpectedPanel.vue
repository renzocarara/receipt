<template>

  <div :class="this.$store.state.checkExpectedOutput ? '' : 'grayed'">

    <h3>Expected Output</h3>

    <div  v-if="this.$store.state.checkExpectedOutput == true" >
        <div v-for="(entry, index) in getInputs" :key="index" class="pl-2" :class='index%2 ? "bgc-stripe-1" : "bgc-stripe-2"'>
            <v-icon v-if="isMedical(entry.type)" color="#9FC500 mr-1 ml-2" >mdi-medical-bag</v-icon>
            <v-icon v-if="isFood(entry.type)" color="#9FC500 mr-1 ml-2" >mdi-food</v-icon>
            <v-icon v-if="isBook(entry.type)" color="#9FC500 mr-1 ml-2" >mdi-book-open-page-variant</v-icon>
            
            {{ entry.quantity }}
            {{ entry.origin!="" ? entry.origin : "" }}
            {{ entry.type }} 
            : {{ getSubtotal[index].toFixed(2) }}
        </div>
        
        <br>
        <strong>Sales Taxes: {{ getTax.toFixed(2) }}</strong> <br>
        <strong>Total: {{ getTotal.toFixed(2) }}</strong><br>
        <small>Basic Tax:10%  Import Tax:5%</small><br>
        <small>Exemptions: food, medical, book</small>
    </div>
    <div v-else >
        NO EXPECTED DATA TO CHECK
    </div>

  </div>

</template>

<script>
import { GOODS_AND_CATEGORIES } from "@/const_goods.js";

export default {
  name: 'ExpectedPanel',
  
  methods: {
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
        getInputs(){
             return this.$store.state.inputs;
        },
        getSubtotal(){
             return this.$store.state.subtotal;
        },
        getTax(){
             return this.$store.state.tax;
        },
        getTotal(){
             return this.$store.state.total;
        },  
  },
}
</script>
<style lang="scss">
.grayed{
    color: $gray-color;
    }
</style>




   