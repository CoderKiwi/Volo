<template>
    <div class="home">
        <NavigationBar/>
        <!--        <img alt="Vue logo" src="../assets/logo.png">-->
        <!--        <HelloWorld msg="Welcome to Volo"/>-->
        <MediaTile/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    import NavigationBar from '@/components/NavigationBar.vue';
    import MediaTile from '@/components/MediaTile.vue';

    @Component({
        components: {
            HelloWorld,
            NavigationBar,
            MediaTile,
        },
    })
    export default class Home extends Vue {
    }
</script>
