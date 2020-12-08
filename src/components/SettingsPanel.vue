<template>
  <div class="">

    <h3>Settings</h3>
   
    <span>Basic Tax <strong> {{basicTaxValue }}%</strong></span>
    <v-slider
      v-model="basicTaxValue"
      max="30"
      min="0"
      :thumb-size="taxSlider.thumbSize"
      :color="taxSlider.color"
      :thumb-color="taxSlider.thumbColor"
      :track-color="taxSlider.trackColor"
      :thumb-label="taxSlider.thumbState"
      dense
      height="20"
    >
    </v-slider>

   <span>Import Tax <strong> {{ importTaxValue }}%</strong></span>
    <v-slider
      v-model="importTaxValue"
      max="20"
      min="0"
      :thumb-size="taxSlider.thumbSize"
      :color="taxSlider.color"
      :thumb-color="taxSlider.thumbColor"
      :track-color="taxSlider.trackColor"
      :thumb-label="taxSlider.thumbState"
      dense
      height="20"
    >
    </v-slider> 

   <span>Exempted goods</span>
    <v-select
          v-model="exemptedGoods"
          :items="allExemptedGoods"
          multiple
          chips
          :item-color="primaryColor"
          dense
        >
    </v-select>
          <!-- label="Select"
          hint="What are the exempted goods"
          persistent-hint -->
     

  </div>
</template>

<script>
import { EXEMPT_CATEGORIES } from "@/const_goods.js";


export default {
  name: 'SettingsPanel',
  components: {
    //   ComponenteProva,
  },
  mounted(){

  },
  data: () => ({
        taxSlider:
         { color: "black", thumbColor: '#9FC500', max: 30, min: 0, thumbSize: 24, trackColor: "gray", thumbState:""},        
        allExemptedGoods: EXEMPT_CATEGORIES,
        primaryColor: "#9FC500"
}),
  methods:{
   
  },
  computed: {
         basicTaxValue: {
            get() {
                return this.$store.state.basicTax;
            },
            set(value) {
                this.$store.commit('SET_BASIC_TAX', value);
                }
            },

         importTaxValue: {
            get() {
                return this.$store.state.importTax;
            },
            set(value) {
                this.$store.commit('SET_IMPORT_TAX', value);
                }
            }, 

         exemptedGoods: {
            get() {
                return this.$store.state.exemptCategories;
            },
            set(value) {
                this.$store.commit('SET_EXEMPT_CATEGORIES', value);
                }
            }, 
  },

}
</script>
