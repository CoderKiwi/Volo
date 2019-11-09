<template>
    <div>
        <b-container class="container">
            <template v-for="mediaObj in mediaObjs">
                <MediaTile class='mx-2' :title="mediaObj.title" :year="mediaObj.year"
                           img-source-uri="https://placekitten.com/380/200"></MediaTile>
            </template>
        </b-container>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import MediaTile from "@/components/MediaTile.vue";
    import Movie from "@/models/Movie";

    @Component({
        components: {
            MediaTile,
        },
    })
    export default class MediaHorizontalList extends Vue {
        @Prop() private mediaObjs: Movie[] = [];
    }
</script>

<style scoped>
    .container {
        display: flex;
        overflow-x: auto;
        min-width: 100%;
    }
    ::-webkit-scrollbar {
        display: none;
    }
</style>
