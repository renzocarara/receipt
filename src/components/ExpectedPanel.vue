<template>
  <div class="">

    <h3>Expected Output</h3>

    <div  v-if="this.$store.state.checkExpectedOutput == true" >
        <div v-for="(entry, index) in getInputs" :key="index" :class='index%2 ? "bgc-stripe-1" : "bgc-stripe-2"'>
                {{ entry.quantity }}
                {{ entry.origin!="" ? entry.origin : "" }}
                {{ entry.type }} 
                : {{ getSubtotal[index].toFixed(2) }}
        </div>
        
        
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