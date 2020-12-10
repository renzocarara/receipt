<template>
    <v-footer app absolute elevation="24" class="py-0 font-weight-medium grey--text my-footer">
        <v-col class="text-center" cols="12">
            <span>&copy; {{ new Date().getFullYear() }}<a class="link" href="https://www.renzocarara.it/" target="_blank" rel="noopener noreferrer">
                Renzo Carara</a>
            </span>
            <span> - see on <a class="link" href="https://github.com/renzocarara/receipt" target="_blank" rel="noopener noreferrer">
                GitHub</a>
            </span>
        </v-col>
    </v-footer>
</template>

<style lang="scss" scoped>
//
.my-footer {
font-size: 14px;
}
.link{
    color:$primary-color;
    text-decoration:none;
    &:hover{
        color:$tertiary-color;
    }
}
</style>
