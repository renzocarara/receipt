<template>
  <div class="">

    <h3>Input</h3>
    <div v-for="(entry, index) in getInputs" :key="index"  :class='index%2 ? "bgc-stripe-1" : "bgc-stripe-2"'>
            {{ entry.quantity }}
            {{ entry.origin!="" ? entry.origin : "" }}
            {{ entry.type }} 
            at {{ entry.price.toFixed(2) }} 
    </div>

  </div>
</template>

<script>

export default {
  name: 'InputPanel',

  computed: {
        // read from the Store
        getInputs(){
             return this.$store.state.inputs;
        },   
  },

}
</script>
