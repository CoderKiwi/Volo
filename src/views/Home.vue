<template>
    <div>
        <NavigationBar/>
        <div>
            <h1>Trending Movies</h1>
            <MediaHorizontalList class="MediaHorizontalList" :media-tiles="mediaTiles"/>
        </div>
        <div>
            <h1>Anticipated</h1>
            <MediaHorizontalList class="MediaHorizontalList" :media-tiles="mediaTiles"/>
        </div>
        <div>
            <h1>Popular</h1>
            <MediaHorizontalList class="MediaHorizontalList" :media-tiles="mediaTiles"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import NavigationBar from "@/components/NavigationBar.vue";
    import MediaHorizontalList from "@/components/MediaHorizontalList.vue";
    import MediaTile from "@/components/MediaTile.vue";

    @Component({
        components: {
            NavigationBar,
            MediaHorizontalList,
        },
    })
    export default class Home extends Vue {
        @Prop() private mediaTiles: MediaTile[] = [new MediaTile(), new MediaTile(), new MediaTile(), new MediaTile(), new MediaTile()]; // todo make a constructor do something
    }
</script>

<style scoped>
    h1 {
        text-align: left;
    }
</style>
