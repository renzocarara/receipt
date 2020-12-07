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

    <v-row>
        <v-col cols="12" md="4">
            <v-card height="100%" class="mx-auto px-4 py-4">
                <input-panel></input-panel>
            </v-card>
        </v-col>
        <v-col cols="12" md="4">
            <v-card height="100%" class="mx-auto px-4 py-4">
                <expected-panel></expected-panel>
            </v-card>
        </v-col>
            <v-col cols="12" md="4">
            <v-card height="100%" class="mx-auto px-4 py-4">
                <computed-panel></computed-panel>
            </v-card>
        </v-col>
    </v-row>

  </div>
</template>

<script>
// @ is an alias to /src
import InputPanel from '@/components/InputPanel.vue';
import ExpectedPanel from '@/components/ExpectedPanel.vue';
import ComputedPanel from '@/components/ComputedPanel.vue';


export default {
  name: 'Home',
  components: {
      InputPanel,
      ExpectedPanel,
      ComputedPanel
  },
  mounted(){

        // qui potrei fare una
        // this.$store.commit('INIT_RECEIPT');
        // console.log("inputs in Store:", this.$store.state.inputs);

  },
  data: () => ({
       
        selectableInputs: ['Input 1', 'Input 2', 'Input 3'], // predefined inputs
       
    }),
  methods:{
   
  },
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
