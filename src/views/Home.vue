<template>
    <div>
        <NavigationBar/>
        <div>
            <h1>Popular Movies</h1>
            <MediaHorizontalList class="MediaHorizontalList" :media-objs="popularMovies"/>
        </div>
        <div>
            <h1>Trending Movies</h1>
            <MediaHorizontalList class="MediaHorizontalList" :media-objs="trendingMovies"/>
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
        private trendingMovies: Movie[] = [];

        private async mounted() {
            const trakt = new TraktApi();
            this.popularMovies = await trakt.getMoviesPopular();
            this.trendingMovies = await trakt.getMoviesTrending();
        }
    }
</script>

<style scoped>
    h1 {
        text-align: left;
    }
</style>
