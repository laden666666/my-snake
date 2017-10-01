<template>
    <div class="snake">
        <ul class="row-container">
            <li class="row" :key="rowIndex" v-for="(row, rowIndex) in reversedCells" :style="{clear: 'both'}">
                <ul class="col-container">
                    <li class="col" :key="colIndex" :class="{active: cell}" v-for="(cell, colIndex) in row"></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    const snake = require('../../lib/typescript/dist/snake')
    const {Game} = snake;

    const rowCount = 10;
    const colCount = 10;

    const game = new Game({
        width: colCount,
        height: rowCount,
    })
    window.game = game

    export default {
        data () {
            return {
                rowCount,
                colCount,
                cells: game.frame()
            }
        },
        computed: {
            // a computed getter
            reversedCells: function () {
                return this.cells.reverse()
            }
        },
        created(){
            setInterval(()=>{
                this.cells = game.frame()
            }, 1000)

            document.onkeydown=function(event) {
                if(event.keyCode == 38){
                    game.turn(1)
                } else if(event.keyCode == 40){
                    game.turn(2)
                } else if(event.keyCode == 37){
                    game.turn(4)
                } else if(event.keyCode == 39){
                    game.turn(3)
                }
            }
        }
    }
</script>

<style scoped>
    .row-container{
        float: left;
        list-style: none;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        border: 1px solid #000;
    }
    .row{
        height: 10px;
        width: 100%;
    }
    .col-container{
        height: 10px;
        writing-mode: tb-rl;
        list-style: none;
        padding: 0;
        margin: 0;
        float: left;
    }
    .col{
        width: 10px;
        height: 10px;
        box-sizing: border-box;
    }
    .col.active{
        background: red;
    }
</style>
