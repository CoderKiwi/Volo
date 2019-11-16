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
    import {Inject} from 'inversify-props';
    import NavigationBar from '@/components/NavigationBar.vue';
    import MediaHorizontalList from '@/components/MediaHorizontalList.vue';
    import Movie from '@/models/Movie';
    import IMediaMetadataService from '@/services/IMediaMetadataService';
    import IMediaImageService from '@/services/IMediaImageService';

    @Component({
        components: {
            NavigationBar,
            MediaHorizontalList,
        },
    })
    export default class Home extends Vue {
        @Inject() private mediaMetadataService!: IMediaMetadataService;
        @Inject() private mediaImageService!: IMediaImageService;

        private popularMoviesHeading = 'Popular Movies';
        private popularMovies: Movie[] = [];
        private trendingMoviesHeading = 'Trending Movies';
        private trendingMovies: Movie[] = [];
        private anticipatedMoviesHeading = 'Anticipated Movies';
        private anticipatedMovies: Movie[] = [];
        private boxOfficeMoviesHeading = 'Box Office Hits';
        private boxOfficeMovies: Movie[] = [];

        private async mounted() {
            this.mediaMetadataService.getMoviesPopular().then((result) => {
                this.popularMovies = result;
                return this.loadThumbnails(result);
            });
            this.mediaMetadataService.getMoviesTrending().then((result) => {
                this.trendingMovies = result;
                return this.loadThumbnails(result);
            });
            this.mediaMetadataService.getMoviesAnticipated().then((result) => {
                this.anticipatedMovies = result;
                return this.loadThumbnails(result);
            });
            this.mediaMetadataService.getMoviesGrossingBoxOffice().then((result) => {
                this.boxOfficeMovies = result;
                return this.loadThumbnails(result);
            });
        }

        private async loadThumbnails(movies: Movie[]): Promise<void> {
            for (const movie of movies) {
                this.mediaImageService.getMovieThumb(movie.ids.imdb)
                    .then((result) => movie.thumbUrl = result);
            }
        }
    }
</script>

<style scoped>
    h1 {
        text-align: left;
    }
</style>
