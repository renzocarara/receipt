<template>
  <v-container class="my-5 bgc-main">

    <v-row>
        <v-col cols="12"  sm="6" md="3">
            <v-card height="100%" class="mx-auto px-4 py-4">
                <select-input></select-input>
            </v-card>
        </v-col>
        <v-col cols="12" md="9">

            <v-card height="100%" class="mx-auto px-4 py-4">
                <add-item></add-item>
            </v-card>
        </v-col>

    </v-row>

    <v-row>
        <v-col class="order-md-last" cols="12" md="6">
            <v-card height="100%" class="mx-auto px-4 py-4">
                <settings-panel></settings-panel>
            </v-card>
        </v-col>
        <v-col class="" cols="12" md="6">
            <v-card height="100%" class="mx-auto px-4 py-4">
                <input-panel></input-panel>
            </v-card>
        </v-col>
           </v-row>
 
            <v-row>
        <v-col cols="12" md="6">
            <v-card height="100%" class="mx-auto px-4 py-4">
                <expected-panel></expected-panel>
            </v-card>
        </v-col>
            <v-col cols="12" md="6">
            <v-card height="100%" class="mx-auto px-4 py-4">
                <computed-panel></computed-panel>
            </v-card>
        </v-col>
    </v-row>

  </v-container>
</template>

<script>
// @ is an alias to /src
import InputPanel from '@/components/InputPanel.vue';
import ExpectedPanel from '@/components/ExpectedPanel.vue';
import ComputedPanel from '@/components/ComputedPanel.vue';
import SettingsPanel from '@/components/SettingsPanel.vue';
import SelectInput from '@/components/SelectInput.vue';
import AddItem from '@/components/AddItem.vue';


export default {
  name: 'Home',
  components: {
      InputPanel,
      ExpectedPanel,
      ComputedPanel,
      SettingsPanel,
      SelectInput,
      AddItem
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
