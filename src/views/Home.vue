<template>
    <div>
        <NavigationBar/>
        <h1>Trending Movies</h1>
        <MediaHorizontalList class="MediaHorizontalList"/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import NavigationBar from "@/components/NavigationBar.vue";
    import MediaHorizontalList from "@/components/MediaHorizontalList.vue";

    @Component({
        components: {
            NavigationBar,
            MediaHorizontalList,
        },
    })

    export default class Home extends Vue {
    }
</script>

<style scoped>
    h1 {
        text-align: left;
    }
</style>
