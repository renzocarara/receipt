<template>
  <div class="">

    <h4>Select Input</h4>
    <v-select class="" 
        v-model="selectedInput"
        :items="selectableInputs"
        required
        dense 
        solo
        >
    </v-select> 

  </div>
</template>

<script>

export default {
  name: 'SelectInput',

  mounted(){
  },

  data: () => ({
        selectableInputs: ['Input 1', 'Input 2', 'Input 3'], // predefined inputs
    }),

  computed: {
        // read/write from/to the Store 
        selectedInput: {
            get() {
                return this.$store.state.currentSelectedInput;
            },
            set(value) {
                this.$store.commit('SET_CURRENT_SELECTED_INPUT', value);
                }
            },
        },
}
</script>
