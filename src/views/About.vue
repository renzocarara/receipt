<template>
  <div class="">
  
<!-- <v-layout> -->
        <v-flex>
            <v-card class="mx-auto view-port" width="800" color="">
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
                        </a>. <br>
                        There's no persitency of data.  No backend is implemented. <br>
                        A Frontend plus some logic do the work. Some predefined Test Data (inputs and expected outputs) is hard-coded. <br>
                       
                    </p>
                    <h4>HOW IT WORKS</h4>
                    <p>
                         It takes some predefined input data and provides a computed output (receipt).
                         The computed output is compared to the expected output to check correctness. <br>
                         The main page shows 4 panels:
                        <ul>
                            <li>Input</li>
                            <li>Expected Output</li>
                            <li>Computed Output</li>
                            <li>Settings</li>
                        </ul>
                        <br>
                        Input Test Data can be selected through a specific field. <br>
                        Through the Settings Panel is possible to vary some parameters used to computes the results.
                    </p>
                    
                    
                    <h4>TECHNOLOGIES</h4>
                    <ul>
                        <li>VUE-CLI v4.5.9</li>
                        <li>VUE.JS v2.6.11</li>
                        <li>VUEX v3.6.0</li>
                        <li>VUE-ROUTER.JS v3.4.9</li>
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
    <!-- </v-layout> -->
      </div>

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
.vert-align-base {
    vertical-align: baseline;
}
.version {
    font-size: 20px;
}
</style>

