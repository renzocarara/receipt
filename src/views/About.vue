<template>
  <v-container>
        <v-flex class="my-3">
            <v-card class="py-5 mx-auto" width="800">
                <v-card-text class="pb-0">
                    <h4>VERSION</h4>
                    <p>
                        v1.0.0
                    </p>
                    <h4>SCOPE</h4>
                    <p>
                        This app is an exercise. It has been developed using
                        <a
                            href="https://vuejs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Vue.js
                        </a> and <a
                            href="https://vuetifyjs.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Vuetify.js
                        </a>. <br>
                       
                    </p>
                    <h4>HOW IT WORKS</h4>
                    <p>
                         It takes some predefined input data (list of items to be purchased) and provides a computed output (the calculated receipt).
                         Some Test Case Data are provided as input and expected output. These data are hardcoded in the app code. <br>
                         The computed receipt is compared with the expected receipt to verify the correctness of the program. <br><br>
    
                        There's no persitency of data.  No real backend is implemented. A Frontend plus some logic do the work.  <br><br>
                        
                        User can create custom inputs, inserting entries from "Add new item" panel or deleting the entries in the Input panel <br>
                        User can furthermore customize inputs changing some common values from the Settings panel. <br>
                        NOTE: if user provide a custom input, adding or deleting entries, the check between input and expected output is disabled. <br><br>
                        
                        The main page shows 6 panels:
                        <ul>
                            <li><strong>Select Input</strong></li>
                            <li><strong>Add new item</strong></li>
                            <li><strong>Input</strong></li>
                            <li><strong>Expected Output</strong></li>
                            <li><strong>Computed Output</strong></li>
                            <li><strong>Settings</strong></li>
                        </ul>
                        
                        <br>
                        <strong>Select Input</strong> permits to select one of the predefined Test Case <br>
                        <strong>Add new item</strong> permits to add an entry in the list of inputs <br>
                        <strong>Input</strong> presents data to be used for calculations <br>
                        <strong>Expected Output</strong> presents hardcoded data related to the selected Input <br>
                        <strong>Computed Output</strong> presents the data calculated onto the Input data <br>
                        <strong>Settings</strong> gives the possibility to vary some parameters used to computes the results. <br>

                    </p>
                    
                    
                    <h4>TECHNOLOGIES</h4>
                    <ul>
                        <li>VUE-CLI v4.5.9</li>
                        <li>VUE v2.6.11</li>
                        <li>VUEX v3.6.0</li>
                        <li>VUE-ROUTER v3.4.9</li>
                        <li>VUETIFY v2.3.10</li>
                    </ul>
                    <br />
                    <h4>CREDITS</h4>
                    <p>
                        Free deploy on
                        <br />
                        <a
                            href="https://netlify.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><img
                                class="netlify-logo"
                                src="@/assets/netlify_logo.png"
                                alt="netlify logo"
                            />
                        </a>
                    </p>

                </v-card-text>
                
                <hr class="my-3" />
                <v-card-actions>
                    <v-spacer />
                    <v-btn dark color="#9FC500" to="/">
                        Back
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-container>
</template>

<script>

export default {
    name: "About",
};
</script>

<style lang="scss" scoped>
//
h4 {
    color: #9FC500;
}
.netlify-logo {
    width: 98px;
    height: 35px;
    vertical-align: text-bottom;
}

</style>

