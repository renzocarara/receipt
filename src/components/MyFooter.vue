<template>
    <v-footer app absolute elevation="24" class="py-0 font-weight-medium grey--text my-footer">
        <v-col class="text-center py-0" cols="12">
            <span>code by <a class="link" href="https://www.renzocarara.it/" target="_blank" rel="noopener noreferrer">
                Renzo Carara</a>
            </span>
            <span> - see on <a class="link" href="https://github.com/renzocarara/receipt" target="_blank" rel="noopener noreferrer">
                GitHub</a>
            </span> <br>
            <span> visit <a class="link" href="https://vivacizzazioneaste.com/" target="_blank" rel="noopener noreferrer">
                Reviva</a>
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
