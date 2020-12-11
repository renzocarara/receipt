<template>
  <div class="px-4">

    <v-form v-model="validity" ref="form">

        <h4>Add new item</h4>
        <v-row>
            <v-col class="pb-0" cols="12" sm="6" md="2">
                <v-text-field
                v-model="customInputs.quantity"
                type="number"
                :rules="quantityRules"
                label="Quantity"
                min="1"
                max="100"
                outlined
                />
            </v-col>

            <v-col class="pb-0" cols="12" sm="6" md="2">
            <v-radio-group
                class="origin"
                v-model="customInputs.origin"
                column
                mandatory
                >
                <v-radio
                    label="Local"
                    value="local"
                    color="#9FC500"

                ></v-radio>
                <v-radio
                    label="Import"
                    value="imported"
                    color="#9FC500"
                ></v-radio>
            </v-radio-group>
            </v-col>

            <v-col class="pb-0" cols="12" sm="6" md="6">
                <v-select class="" 
                    label="Type of goods"
                    v-model="customInputs.type"
                    :items="selectableType"
                    :rules="typeRules"
                    dense
                    outlined
                    >
                </v-select> 
            </v-col>
            
            <v-col class="pb-0" cols="12" sm="6" md="2">
                <v-text-field
                    v-model="customInputs.price"
                    type="number"
                    :rules="priceRules"
                    min="0.01"
                    max="1000"
                    label="Price"
                    placeholder="Price"
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <div class="d-flex justify-end">
            <v-btn class=""
                :disabled="!validity"
                color="#9FC500"
                @click="addItem">
            ADD 
            </v-btn>
        </div>

    </v-form>

  </div>
</template>

<script>
import { GOODS, ORIGINS } from "@/const_goods.js";

export default {
  name: 'AddItem',
 
  methods:{
      addItem() {

          // disable checks between input and expected output
          // it's no more applicable because input has been changed and expected output is hard-coded
          this.$store.commit('SET_CHECK_EXPECTED_OUTPUT', false);  

            // normalize data format
          if (this.customInputs.origin == "local") this.customInputs.origin = ""; 
          this.customInputs.quantity = parseInt(this.customInputs.quantity); 
          this.customInputs.price = parseFloat(this.customInputs.price); 

          this.$store.commit('ADD_ENTRY', this.customInputs);  // update the STORE

          // reset input fields
          //this.customInputs = {quantity: 1, origin: "", type:"book", price: "1.00"}

      }
  },
  data: () => ({
    selectableType: GOODS, //  types of goods
    selectableOrigin: ORIGINS, //  origin of goods
    
    customInputs:  {quantity: 1, origin: "", type:"", price: "1.00"}, // initial value

    validity: false, // check form validity
    quantityRules: [
     v => !!v || 'error',
     v => v>0 || 'min 1',
     v => v<=100 || 'max 100',
     v => v==Math.trunc(v) || "integer",
     ], 

    priceRules: [
     v => !!v || 'error!',
     v => v>0 || 'min 0.01',
     v => v<=1000 || 'max 1000',
    v => !(v.toString().indexOf('')) || 'invalid format',
     ],

    typeRules: [
     v => !!v || '',
     ]
    
    }),
}
</script>

<style lang="scss" scoped>

::v-deep .v-input--selection-controls {
    margin-top: 0;
    padding-top: 0;
}

::v-deep .origin .v-messages{
    min-height : 0;
}
</style>
