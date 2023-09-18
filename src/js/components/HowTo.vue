<template>
    <div>
        <h2>Не знаете с чего начать?</h2>
        <p>Программы предлагают ежедневные рекомендации в интерактивном календаре</p>
        <div class="blocks" :style="'left: ' + left + 'px'">
            <div class="item">
                <h3>Видео тренировки</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
            <div class="item">
                <h3>Программа курса</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
            <div class="item">
                <h3>Тарифы</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
            <div class="item">
                <h3>Полный доступ</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
            <div class="item">
                <h3>Информация о нас</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
            <div class="item">
                <h3>Контакты</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
            <div class="item">
                <h3>Местоположение</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
        <div class="arrows">
            <img src="/img/arrow-prev.svg" @click="moveBlock('prev')" :style="'opacity: ' + imgOpacityPrev" alt="Arrow previous">
            <img src="/img/arrow-next.svg" @click="moveBlock('next')" :style="'opacity: ' + imgOpacityNext" alt="Arrow next">
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            left: 0,
            imgOpacityPrev: 0.5,
            imgOpacityNext: 1,
        }
    },
    methods: {
        moveBlock(value) {
            let add = 335;
            if(value == 'next' && this.left >= -1675)
                this.left -= add
            else if(value == 'prev' && this.left != 0)
                this.left += add
            if(this.left >= 0)
                this.imgOpacityPrev = 0.5
            else if(this.left <= -1675)
                this.imgOpacityNext = 0.5
            else {
                this.imgOpacityPrev = 1
                this.imgOpacityNext = 1
            }
        }
    }
}
</script>


<style lang="scss" scoped>
h2 {
    margin-top: 80px;
    font-size: 2.4em;
}

p {
    color: #9B9A97;
    margin-top: 15px;
}

.blocks {
    display: flex;
    margin-top: 35px;
    margin-bottom: 50px;
    width: 2500px;
    position: relative;
    transition: all 500ms ease;

    .item {
        background-color: #323443;
        padding: 30px;
        padding-top: 40px;
        border-radius: 12px;
        width: 250px;

        &:not(:last-of-type) {
            margin-right: 25px;
        }

        h3 {
            font-size: 1em;
            letter-spacing: 0.5px;
        }

        p {
            color: #9B9A97;
        }

        i {
            float: right;
            font-size: 1.2em;
            position: relative;
            bottom: 25px;
            cursor: pointer;
        }
    }
}

.arrows {
    margin-bottom: 150px;

    img {
        cursor: pointer;
        transition: transform 500ms ease;

        &:first-of-type {
            margin-right: 30px;
        }
        
        &:hover {
            transform: scale(1.1);
        }
    }
}
</style>