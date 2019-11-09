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
            <h1>Box Office Hits Last Weekend</h1>
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
            const trakt = new TraktApi();
            this.popularMovies = await trakt.getMoviesPopular();
            this.trendingMovies = await trakt.getMoviesTrending();
            this.anticipatedMovies = await trakt.getMoviesAnticipated();
            this.boxOfficeMovies = await trakt.getMoviesGrossingBoxOffice();
        }
    }
</script>

<style scoped>
    h1 {
        text-align: left;
    }
</style>
