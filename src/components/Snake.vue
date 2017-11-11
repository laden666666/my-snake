<template>
    <div class="snake">
        <ul class="row-container">
            <li class="row" :key="rowIndex" v-for="(row, rowIndex) in reversedCells" :style="{clear: 'both'}">
                <ul class="col-container">
                    <li class="col" :key="colIndex" v-for="(cell, colIndex) in row">
                        <img class="snake-img" :src="imgMap[cell]" v-show="cell != '00'"/>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    import imgMap from './Snake/imgMap'

    export default {
        props:{
            rowCount: {
                type: Number,
                required: true,
            },
            colCount: {
                type: Number,
                required: true,
            },
            game: {
                type: Object,
                required: true,
            },
        },
        data () {
            return {
                imgMap,
                cells: []
            }
        },
        computed: {
            // a computed getter
            reversedCells: function () {
                return this.cells.reverse().map(row=>row.reverse())
            },
        },
        created(){
            setInterval(()=>{
                if(this.game)
                    this.cells = this.game.frame()
            }, 1000)

            document.onkeydown=(event)=>{
                if(event.keyCode == 38){
                    this.game.turn(1)
                } else if(event.keyCode == 40){
                    this.game.turn(2)
                } else if(event.keyCode == 37){
                    this.game.turn(3)
                } else if(event.keyCode == 39){
                    this.game.turn(4)
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
        height: 20px;
        writing-mode: tb-rl;
        list-style: none;
        padding: 0;
        margin: 0;
        float: left;
    }
    .col{
        width: 20px;
        height: 20px;
        box-sizing: border-box;
        position: relative;
    }
    .snake-img{
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 20px;
        height: 20px;
        z-index: -1;
    }
</style>
