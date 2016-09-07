<template>
    <div class="slider">
        <slider width="800px"
                :interval="1000">
            <slider-item :style="{ backgroundColor: '#3f51b5' }"></slider-item>
            <slider-item :style="{ backgroundColor: '#eee' }"></slider-item>
            <slider-item :style="{ backgroundColor: '#f44336' }"></slider-item>
        </slider>
    </div>
</template>
<style>
    .slider {
        margin: 20px 100px;
    }
</style>
<script>
    import {Slider, SliderItem} from 'vue-easy-slider'
    export default{
        data(){
            return {
                items: [
                    {
                        src: 'http://placehold.it/350x150/999999/000000',
                        alt: 'images-1'
                    },
                    {
                        src: 'http://placehold.it/350x150/eeeeee/c90023',
                        alt: 'images-2'
                    },
                    {
                        src: 'http://placehold.it/350x150/333333/eeeeee',
                        alt: 'images-3'
                    }
                ]
            }
        },
        components: {
            Slider,
            SliderItem
        }
    }
</script>
