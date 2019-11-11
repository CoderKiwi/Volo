<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand><h1>Volo</h1></b-navbar-brand>
        </b-navbar>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

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
