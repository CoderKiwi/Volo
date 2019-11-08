<template>
    <div>
        <b-container class="container">
            <MediaTile title="Braveheart" year="1995" img-source-uri="https://placekitten.com/380/200"/>
            <MediaTile title="Braveheart" year="1995" img-source-uri="https://placekitten.com/380/200"/>
            <MediaTile title="Braveheart" year="1995" img-source-uri="https://placekitten.com/380/200"/>
            <MediaTile title="Braveheart" year="1995" img-source-uri="https://placekitten.com/380/200"/>
            <MediaTile title="Braveheart" year="1995" img-source-uri="https://placekitten.com/380/200"/>
        </b-container>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import MediaTile from "@/components/MediaTile.vue";

    @Component({
        components: {
            MediaTile,
        },
    })

    export default class MediaHorizontalList extends Vue {
    }
</script>

<style scoped>
    .container {
        display: flex;
        overflow-x: auto;
    }
</style>
