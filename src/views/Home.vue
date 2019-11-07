<template>
    <div>
        <NavigationBar/>
        <h1>Trending Movies</h1>
        <MediaTile class="tile" title="Braveheart" year="1995" img-source-uri="https://placekitten.com/380/200"/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import NavigationBar from '@/components/NavigationBar.vue';
    import MediaTile from '@/components/MediaTile.vue';

    @Component({
        components: {
            NavigationBar,
            MediaTile,
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
