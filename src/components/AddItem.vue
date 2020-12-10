<template>
  <div class="px-4">

    <v-form v-model="validity" ref="form">

        <h4>Add new item</h4>

        <v-btn class=""
            :disabled="!validity"
            color="#9FC500"
            @click="addItem">
        ADD 
        </v-btn>

        <v-row>
            <v-col cols="12" sm="6" md="2">
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
            <v-col cols="12" sm="6" md="3">
                <v-select class=""
                    label="Origin"
                    v-model="customInputs.origin"
                    :items="selectableOrigin"
                    dense
                    outlined
                    >
                </v-select> 
            </v-col>
            <v-col cols="12" sm="6" md="5">
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
            <v-col cols="12" sm="6" md="2">
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

    </v-form>


  </div>
</template>

<script>
// @ is an alias to /src
import { GOODS, ORIGINS } from "@/const_goods.js";


export default {
  name: 'AddItem',
  components: {
  },
  mounted(){

  },

  methods:{
      addItem() {

          // disable checks between input and expected output
          // it's no more applicable because input has been changed and expected output is hard-coded
          this.$store.commit('SET_CHECK_EXPECTED_OUTPUT', false);  

          console.log("add clicked!!");
          console.log("this.customInputs",this.customInputs);

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
    selectableType: GOODS, // 
    selectableOrigin: ORIGINS, // 
    
    customInputs:  {quantity: 1, origin: "", type:"", price: "1.00"},
    

    validity: false, // check form validity
    quantityRules: [
     v => !!v || 'error',
     v => v>0 || 'min 1',
     v => v<=100 || 'max 100',
     v => v==Math.trunc(v) || "integer",
    //   v => String(v).includes('-') || 'invalid format',
    //  v => String(v).includes('+') || 'invalid format',
    //  v => String(v).includes('.') || 'invalid format'
     ], 

    priceRules: [
     v => !!v || 'error',
     v => v>0 || 'min 0.01',
     v => v<=1000 || 'max 1000',
    //  v => String(v).includes('-') || 'invalid format',
    //  v => String(v).includes('+') || 'invalid format'
     ],

    typeRules: [
     v => !!v || '',
    
     ]
     
    
    }),

}
</script>
