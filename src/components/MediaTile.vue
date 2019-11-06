<template>
    <div>
        <h1>New Releases</h1>
        <b-row>
            <b-card no-body style="max-width: 20rem;" class="mx-3 mb-3">
                <b-card-img src="https://placekitten.com/380/200" alt="Image" top></b-card-img>

                <b-card-body>
                    <!--                <b-card-title>Braveheart (1995)</b-card-title>-->
                    <b-card-sub-title>Braveheart (1995)</b-card-sub-title>
                    <!--                <b-card-text>Braveheart (1995)</b-card-text>-->
                </b-card-body>
            </b-card>
            <b-card no-body style="max-width: 20rem;" class="mx-3 mb-3">
                <b-card-img src="https://placekitten.com/380/200" alt="Image" top></b-card-img>

                <b-card-body>
                    <!--                <b-card-title>Braveheart (1995)</b-card-title>-->
                    <b-card-sub-title>Braveheart (1995)</b-card-sub-title>
                    <!--                <b-card-text>Braveheart (1995)</b-card-text>-->
                </b-card-body>
            </b-card>
        </b-row>

        <h1>Trending</h1>
        <b-container fluid class="p-4 bg-dark">
            <b-row>
                <b-col>
                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"/>
                </b-col>
                <b-col>
                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"/>
                </b-col>
                <b-col>
                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"/>
                </b-col>
            </b-row>
        </b-container>

        <h1>Anticipated</h1>
        <b-row>
            <figure class="figure mx-3 mb-3">
                <img src="https://placekitten.com/380/200" class="figure-img img-fluid rounded" alt="...">
                <figcaption class="figure-caption">Braveheart (2019)</figcaption>
            </figure>
            <figure class="figure mx-3 mb-3">
                <img src="https://placekitten.com/380/200" class="figure-img img-fluid rounded" alt="...">
                <figcaption class="figure-caption">Braveheart (2019)</figcaption>
            </figure>
        </b-row>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class MediaTile extends Vue {
    }
</script>

<style scoped>
h1 {
    text-align: left;
}
</style>
