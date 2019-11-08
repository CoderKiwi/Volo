<template>
    <div>
        <b-container class="container">
            <template v-for="mediaTile in mediaTiles">
                <MediaTile class='mx-2' :MediaTile="mediaTile"></MediaTile>
            </template>
        </b-container>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import MediaTile from "@/components/MediaTile.vue";

    @Component({
        components: {
            MediaTile,
        },
    })
    export default class MediaHorizontalList extends Vue {
        @Prop() private mediaTiles!: MediaTile[]; // todo this is hacky
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
