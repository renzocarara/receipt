<template>
  <div class="">

    <h4>Expected Output</h4>
    <div v-for="(entry, index) in getInputs" :key="index">
            {{ entry.quantity }}
            {{ entry.origin!="" ? entry.origin : "" }}
            {{ entry.type }} 
            : {{ getSubtotal[index].toFixed(2) }} 
    </div>
    <br>
    Sales Taxes: {{ getTax.toFixed(2) }} <br>
    Total: {{ getTotal.toFixed(2) }}

  </div>
</template>

<script>

export default {
  name: 'ExpectedPanel',
  components: {
  },
  mounted(){

  },
  data: () => ({
      
    }),
  methods:{
   
  },
  computed: {
        // read from the Store
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