<template>
    <div>
        <NavigationBar/>
        <div>
            <h1>{{ popularMoviesHeading }}</h1>
            <MediaHorizontalList class="MediaHorizontalList" :media-objs="popularMovies"/>
        </div>
        <div>
            <h1>{{ trendingMoviesHeading }}</h1>
            <MediaHorizontalList class="MediaHorizontalList" :media-objs="trendingMovies"/>
        </div>
        <div>
            <h1>{{ anticipatedMoviesHeading }}</h1>
            <MediaHorizontalList class="MediaHorizontalList" :media-objs="anticipatedMovies"/>
        </div>
        <div>
            <h1>{{ boxOfficeMoviesHeading }}</h1>
            <MediaHorizontalList class="MediaHorizontalList" :media-objs="boxOfficeMovies"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import NavigationBar from '@/components/NavigationBar.vue';
    import MediaHorizontalList from '@/components/MediaHorizontalList.vue';
    import TraktApi from '@/services/TraktApi.ts';
    import Movie from '@/models/Movie';

    @Component({
        components: {
            NavigationBar,
            MediaHorizontalList,
        },
    })
    export default class Home extends Vue {
        private popularMoviesHeading = 'Popular Movies';
        private popularMovies: Movie[] = [];
        private trendingMoviesHeading = 'Trending Movies';
        private trendingMovies: Movie[] = [];
        private anticipatedMoviesHeading = 'Anticipated Movies';
        private anticipatedMovies: Movie[] = [];
        private boxOfficeMoviesHeading = 'Box Office Hits';
        private boxOfficeMovies: Movie[] = [];

        private async mounted() {
            await Promise.all([
                TraktApi.instance.getMoviesPopular().then((result) => this.popularMovies = result),
                TraktApi.instance.getMoviesTrending().then((result) => this.trendingMovies = result),
                TraktApi.instance.getMoviesAnticipated().then((result) => this.anticipatedMovies = result),
                TraktApi.instance.getMoviesGrossingBoxOffice().then((result) => this.boxOfficeMovies = result),
            ]);
        }
    }
</script>

<style scoped>
    h1 {
        text-align: left;
    }
</style>
