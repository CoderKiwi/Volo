<template>
    <div class="MediaTile">
        <b-img-lazy class="image" :src="imgSourceUri" :alt="title" fluid rounded/>
        <div>
            {{ title }} ({{ year }})
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class MediaTile extends Vue {
        @Prop() private title!: string; // todo maybe remove !
        @Prop() private year!: number;
        @Prop() private imgSourceUri!: string;
    }
</script>

<style scoped>
    .MediaTile {
        float: left;
        min-width: 214px;
        min-height: 120px;
        max-width: 856px;
        max-height: 480px;
    }
</style>
