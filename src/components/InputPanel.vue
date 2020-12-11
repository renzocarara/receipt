<template>
  <div class="">

    <h2>Input</h2>
    <div v-for="(entry, index) in getInputs" :key="index" class="pl-1" :class='index%2 ? "bgc-stripe-1" : "bgc-stripe-2"'>
        <v-icon class="trash trash-hover mr-2" @click="removeItem(index)">mdi-trash-can-outline</v-icon> 
        <v-icon v-if="isMedical(entry.type)" color="#9FC500 mr-1 ml-2" >mdi-medical-bag</v-icon>
        <v-icon v-if="isFood(entry.type)" color="#9FC500 mr-1 ml-2" >mdi-food</v-icon>
        <v-icon v-if="isBook(entry.type)" color="#9FC500 mr-1 ml-2" >mdi-book-open-page-variant</v-icon>
        
        {{ entry.quantity }}
        {{ entry.origin!="" ? entry.origin : "" }}
        {{ entry.type }} 
        at {{ entry.price.toFixed(2) }} 
    </div>

  </div>
</template>

<script>

import { GOODS_AND_CATEGORIES } from "@/const_goods.js";

export default {
  name: 'InputPanel',

  methods:{
      removeItem(index){
          // disable checks between input and expected output
          // it's no more applicable because input has been changed and expected output is hard-coded
          this.$store.commit('SET_CHECK_EXPECTED_OUTPUT', false);  

          // remove the clicked entry  
          this.$store.commit('REMOVE_ENTRY', index);  
          
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
        // read from the Store
        getInputs(){
             return this.$store.state.inputs;
        },   
  },

}
</script>

<style lang="scss" scoped>
.trash{
    color: #9FC500;

    &:hover {
        color: red;
        transform: scale(1.3);
        transition: 0.3s ease-in-out;
    }
}

</style>;
