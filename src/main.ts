import 'reflect-metadata';  // sets up Reflect namespace, must be imported before dependency injection used
import buildDependencyContainer from '@/inversify.config';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

class AppBootstrap {
    constructor() {
        this.loadDependencyContainer();
        this.loadVueApp();
    }

    private loadDependencyContainer(): void {
        buildDependencyContainer();
    }

    private loadVueApp(): void {
        Vue.config.productionTip = false;
        Vue.use(BootstrapVue);

        new Vue({
            router,
            render: (h) => h(App),
        }).$mount('#app');
    }
}

// tslint:disable-next-line:no-unused-expression
new AppBootstrap();
