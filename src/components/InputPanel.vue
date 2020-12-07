<template>
  <div class="">

    <!-- label="Select Input" -->
    <!-- <v-select class="" 
        v-model="type"
        :items="selectableType"
        dense
        >
    </v-select>  -->

    <h4>Input</h4>
    <div v-for="(entry, index) in getInputs" :key="index">
            {{ entry.quantity }}
            {{ entry.origin!="" ? entry.origin : "" }}
            {{ entry.type }} 
            at {{ entry.price.toFixed(2) }} 
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import ComponenteProva from '@/components/ComponenteProva.vue';
// import { GOODS } from "@/const_goods.js";


export default {
  name: 'InputPanel',
  components: {
    //   ComponenteProva,
  },
  mounted(){

  },
  data: () => ({
        // selectableType: GOODS, // predefined inputs
        
    }),
  methods:{
   
  },
  computed: {
        // read from the Store
        getInputs(){
             return this.$store.state.inputs;
        },   
  },

}
</script>
