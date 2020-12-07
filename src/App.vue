<template>
  <v-app>
   <v-app-bar app color="#FFFFFF" dense>
            
            <router-link to="/">
                <v-img
                alt="receipt logo"
                class="shrink mr-4"
                contain
                src="@/assets/logo_receipt.png"
                width="50"
                height="40"
                />
            </router-link>

            <router-link class="text-decoration-none" to="/">
                <v-toolbar-title class="white--text">
                    <span class="my-title re">RE</span>
                    <span class="my-title ceipt">CEIPT</span>
                </v-toolbar-title>
            </router-link>

            <v-spacer></v-spacer>

            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        </v-app-bar>

            <v-navigation-drawer v-model="drawer" right app temporary>
                <v-list nav dense>
                    <v-list-item-group v-model="group" active-class="green--text text--darken-4">
                    <v-list-item>
                        <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title><router-link to="/">Home</router-link></v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                        <v-icon>mdi-information</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title><router-link to="/about">About</router-link></v-list-item-title>
                    </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>

            <v-main>

                <v-container>
                    <!-- <transition name="fade" mode="out-in" appear> -->
                        <router-view></router-view>
                    <!-- </transition> -->
                </v-container>  

            </v-main>

            <MyFooter/>

        </v-app>
</template>

<script>
import MyFooter from '@/components/MyFooter.vue';

export default {
  name: 'App',

  components: {
    MyFooter
  },

  data() {
        return {
            drawer: false,
            group: null
        };
    },
    watch: {
    $route(to) {
        document.title = `RECEIPT - ${to.meta.title}`;
        const link = document.querySelector("[rel='icon']")
        link.setAttribute('href',to.meta.icon)
        }
    }
};
</script>

<style lang="scss">
//
.my-title{
    font-family: 'Archivo Black', sans-serif;
    font-weight: bold;
    font-size: 26px;
}
.re {
    color: #191919;
}
.ceipt {
    color:#8FCA1C;
}

.my-link {
    text-align: left;
    text-decoration: underline;
}
</style>
