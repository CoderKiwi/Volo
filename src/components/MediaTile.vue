<template>
    <div class="MediaTile">
        <b-img :alt="title+' Thumbnail'" :src="imgSourceUri" class="image" fluid rounded/>
        <div>
            {{ tileTitle }}
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class MediaTile extends Vue {
        @Prop() private title!: string;
        @Prop() private year!: number;
        @Prop() private imgSourceUri!: string;

        get tileTitle() {
            return this.year != null ? `${this.title} (${this.year})` : `${this.title}`;
        }
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
