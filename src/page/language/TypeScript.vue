<template>
    <div id="app">
        <Snake :rowCount="rowCount" :colCount="colCount" :game="game"></Snake>
    </div>
</template>

<script>
    import Snake from '../../components/Snake.vue'
    const snake = require('../../../lib/typescript/dist/snake')
    const {Game} = snake;

    const rowCount = 10;
    const colCount = 10;
    let game

    export default {
        name: 'app',
        data(){
            game = new Game({
                width: colCount,
                height: rowCount,
            })
            return {
                rowCount,
                colCount,
                game: game
            }
        },
        components: {
            Snake
        }
    }
</script>
