<template>
  <div class="">

    <div class="d-flex justify-space-between">
    <h3>Settings</h3> 
    <v-btn class=""
            x-small
            color="#9FC500"
            @click="resetDefaults">
        Defaults 
    </v-btn>
    </div>
    <!-- <br> -->
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

   <span>Exempted goods <small>(no Basic Tax applied)</small></span>
    <v-select
          v-model="exemptedGoods"
          :items="allExemptedGoods"
          multiple
          chips
          item-color="#9FC500"
          dense
          deletable-chips
        >
    </v-select>
          <!-- label="Select"
          hint="What are the exempted goods"
          persistent-hint -->
     

  </div>
</template>

<script>
import { BASIC_TAX, IMPORT_TAX, EXEMPT_CATEGORIES } from "@/const_goods.js";


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
}),
  methods:{
      resetDefaults(){
            this.$store.commit('SET_BASIC_TAX', BASIC_TAX); 
            this.$store.commit('SET_IMPORT_TAX', IMPORT_TAX);
            this.$store.commit('SET_EXEMPT_CATEGORIES', EXEMPT_CATEGORIES);
     }
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
