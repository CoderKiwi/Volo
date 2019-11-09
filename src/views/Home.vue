<template>
    <div>
        <NavigationBar/>
        <div>
            <h1>Popular Movies</h1>
            <MediaHorizontalList class="MediaHorizontalList" :media-objs="popularMovies"/>
        </div>
        <div>
            <h1>Popular Movies 2</h1>
            <MediaHorizontalList class="MediaHorizontalList" :media-objs="popularMovies"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import NavigationBar from "@/components/NavigationBar.vue";
    import MediaHorizontalList from "@/components/MediaHorizontalList.vue";
    import TraktApi from "@/services/TraktApi.ts";
    import Movie from "@/models/Movie";

    @Component({
        components: {
            NavigationBar,
            MediaHorizontalList,
        },
    })
    export default class Home extends Vue {
        private popularMovies: Movie[] = [];

        private async mounted() {
            this.popularMovies = await new TraktApi().getMoviesPopular();
        }
    }
</script>

<style scoped>
    h1 {
        text-align: left;
    }
</style>
