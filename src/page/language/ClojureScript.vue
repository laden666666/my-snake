<template>
    <div id="app">
    </div>
</template>

<script>
    import Snake from '../../components/Snake.vue'
    const snake = require('../../../lib/clojurescript/dist/app.snake')

    window.snake = snake

    export default {
        data(){
            return {
            }
        },
        components: {
        }
    }
</script>
