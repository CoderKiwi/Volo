<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand><h1>Volo</h1></b-navbar-brand>
            <b-navbar-nav class="ml-auto">
                <b-button v-b-modal.about-modal>About</b-button>
                <b-modal id="about-modal" :hide-footer="true" title="About Volo">
                    <p class="my-1">Volo is powered by several great resources. Please support them!</p>
                    <p></p>
                    <b-container>
                        <b-row class="text-center">
                            <b-col>
                                <b-link href="https://trakt.tv/" target="_blank">Trakt</b-link>
                            </b-col>
                            <b-col>
                                <b-link href="https://fanart.tv/contribute/" target="_blank">Fanart</b-link>
                            </b-col>
                        </b-row>
                    </b-container>
                </b-modal>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class NavigationBar extends Vue {
    }
</script>

<style scoped>
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }
</style>
