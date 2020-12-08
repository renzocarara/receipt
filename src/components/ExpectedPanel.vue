<template>
  <div class="">

    <h3>Expected Output</h3>
    <div v-for="(entry, index) in getInputs" :key="index" :class='index%2 ? "bgc-stripe-1" : "bgc-stripe-2"'>
            {{ entry.quantity }}
            {{ entry.origin!="" ? entry.origin : "" }}
            {{ entry.type }} 
            : {{ getSubtotal[index].toFixed(2) }}
    </div>
    
    
    <strong>Sales Taxes: {{ getTax.toFixed(2) }}</strong> <br>
    <strong>Total: {{ getTotal.toFixed(2) }}</strong>

  </div>
</template>

<script>

export default {
  name: 'ExpectedPanel',
  
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

<style lang="scss">

</style>