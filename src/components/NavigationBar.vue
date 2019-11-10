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

</style>
