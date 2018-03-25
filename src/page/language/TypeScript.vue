<template>
    <div id="app">
        <Snake :rowCount="rowCount" :colCount="colCount" :game="game"></Snake>
    </div>
</template>

<script>
    import Snake from '../../components/Snake.vue'
    const snake = require('ts-snake')
    const {Game} = snake;

    const rowCount = 10;
    const colCount = 10;
    const game = new Game({
        width: colCount,
        height: rowCount,
    })

    export default {
        name: 'app',
        data(){
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
