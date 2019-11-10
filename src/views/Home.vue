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
        <div>
            <h1>Anticipated Movies</h1>
            <MediaHorizontalList class="MediaHorizontalList" :media-objs="anticipatedMovies"/>
        </div>
        <div>
            <h1>Box Office Hits</h1>
            <MediaHorizontalList class="MediaHorizontalList" :media-objs="boxOfficeMovies"/>
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
        private anticipatedMovies: Movie[] = [];
        private boxOfficeMovies: Movie[] = [];

        private async mounted() {
            const trakt = new TraktApi(); // todo
            await Promise.all([
                trakt.getMoviesPopular().then(result => this.popularMovies = result),
                trakt.getMoviesTrending().then(result => this.trendingMovies = result),
                trakt.getMoviesAnticipated().then(result => this.anticipatedMovies = result),
                trakt.getMoviesGrossingBoxOffice().then(result => this.boxOfficeMovies = result)
            ]);
        }
    }
</script>

<style scoped>
    h1 {
        text-align: left;
    }
</style>
