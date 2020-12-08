<template>
  <div class="">

    <h4>Settings</h4>
   
   <!-- <select-input></select-input> //???? qui o no???  -->

    select taxes <br>
    select exemption 

  </div>
</template>

<script>
// @ is an alias to /src
// import ComponenteProva from '@/components/ComponenteProva.vue';
// import { GOODS } from "@/const_goods.js";


export default {
  name: 'SettingsPanel',
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
        // getInputs(){
        //      return this.$store.state.inputs;
        // },   
  },

}
</script>
