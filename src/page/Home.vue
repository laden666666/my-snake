<template>
    <ul class="menu-list">
        <li v-for="language in menu" :key="language.name" @click="go(language.url)">
            <div class="language">
                <img class="language-icon" :src="language.icon" v-if="language.icon"/>
                <span class="language-name">{{language.name}}</span>
                <p class="language-describe">{{language.describe}}</p>
                <a class="language-home" :href="language.home" target="_blank">
                    home
                </a>
            </div>
        </li>
    </ul>
</template>

<script>
    import router from '../router'

    export default {
        name: 'Main',
        data(){
            return {
                menu: [{
                    icon: '',
                    name: 'TypeScript',
                    describe: 'JavaScript that scales.TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
                    url: '/type_script',
                    home: 'http://www.typescriptlang.org/index.html',
                },{
                    icon: require('../assets/language/cljs-logo.png'),
                    name: 'ClojureScript',
                    describe: 'ClojureScript is a robust, practical, and fast programming language with a set of useful features that together form a simple, coherent, and powerful tool.',
                    url: '/clojure_script',
                    home: 'https://clojurescript.org/',
                },]
            }
        },
        methods:{
            go(url){
                router.push(url)
            },
        }
    }
</script>

<style scoped >
    .menu-list{
        list-style: none;
        max-width: 800px;
        margin: 0 auto;
        padding: 4px 10px;
    }

    .language {
        padding : 8px 16px ;
        background-color : rgb(236, 248, 255) ;
        border-radius : 4px ;
        border-left : 5px solid rgb(80, 191, 255) ;
        margin : 20px 0px ;
        color : rgb(94, 109, 130) ;
        text-decoration-line: none;
        cursor: pointer;
        position: relative;
        transition: all .3s ease-in-out;
        box-shadow: 0 6px 18px 0 rgba(232,237,250,.5);
        right: 0;
    }
    .language:hover{
        right: 3px;
    }
    .language-icon {
        display: inline-block;
        line-height: 40px;
        width: 40px;
        height: 40px;
        vertical-align: middle;
    }
    .language-name {
        line-height: 40px;
        font-size: 30px;
        vertical-align: middle;
    }
    .language-describe {
    }
    .language-home {
        color: dodgerblue;
    }
</style>
