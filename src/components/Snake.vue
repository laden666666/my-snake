<template>
    <div class="snake">
        <ul class="game">
            <li class="row">
                <ul class="row-container">
                    <li class="col"></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    import snake from '../../lib/typescript/dist/snake'
    const {Game} = snake;

    const rowCount = 10;
    const colCount = 10;

    export default {
        data () {
            return {
                rowCount,
                colCount,
                game: new Game({

                }),
            }
        }
    }
</script>

<style scoped>
</style>
