<template>
    <div class="videos">
        <div class="video" @click="videos[0] = !videos[0]">
            <p class="number">01</p>
            <div class="info">
                <h4>Упражнения дома</h4>
                <p>15 видео</p>
            </div>
            <div class="icon"><i class="fa-solid fa-arrow-right"></i></div>
            <div class="video__open" v-if="videos[0]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium maxime rerum laborum ipsam omnis blanditiis non ullam animi, optio nisi?
            </div>
        </div>
        <div class="video" @click="videos[1] = !videos[1]">
            <p class="number">02</p>
            <div class="info">
                <h4>Оставайтесь в форме</h4>
                <p>48 видео</p>
            </div>
            <div class="icon"><i class="fa-solid fa-arrow-right"></i></div>
            <div class="video__open" v-if="videos[1]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium maxime rerum laborum ipsam omnis blanditiis non ullam animi, optio nisi?
            </div>
        </div>
        <div class="video" @click="videos[2] = !videos[2]">
            <p class="number">03</p>
            <div class="info">
                <h4>Интенсив</h4>
                <p>25 видео</p>
            </div>
            <div class="icon"><i class="fa-solid fa-arrow-right"></i></div>
            <div class="video__open" v-if="videos[2]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium maxime rerum laborum ipsam omnis blanditiis non ullam animi, optio nisi?
            </div>
        </div>
        <div class="video" @click="videos[3] = !videos[3]">
            <p class="number">04</p>
            <div class="info">
                <h4>Простые упражнения</h4>
                <p>35 видео</p>
            </div>
            <div class="icon"><i class="fa-solid fa-arrow-right"></i></div>
            <div class="video__open" v-if="videos[3]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium maxime rerum laborum ipsam omnis blanditiis non ullam animi, optio nisi?
            </div>
        </div>
        <div class="video" @click="videos[4] = !videos[4]">
            <p class="number">05</p>
            <div class="info">
                <h4>Сжигание калорий</h4>
                <p>35 видео</p>
            </div>
            <div class="icon"><i class="fa-solid fa-arrow-right"></i></div>
            <div class="video__open" v-if="videos[4]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium maxime rerum laborum ipsam omnis blanditiis non ullam animi, optio nisi?
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            // Массив состояния блоков
            videos: [false, false, false, false, false]
        }
    }
}
</script>


<style lang="scss" scoped>
.videos {
    @media (max-width: 1100px) {
        margin-top: 100px;
    }
    @media (min-width: 1100px) {
        margin-top: 300px;
    }
}

.video {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0px;
    cursor: pointer;
    transition: all 500ms ease;
    flex-wrap: wrap;
    
    &:not(:last-of-type) {
        border-bottom: 0.5px solid #666;
    }

    &:hover {
        background-color: #1d1d1d;

        i {
            transform: rotate(90deg);
        }
    }

    .video__open {
        width: 100%;
        margin: 30px 50px;
        margin-bottom: 0px;
    }

    .number {
        color: #575757;
        font-weight: 600;
        font-size: 1.2em;
    }

    .info {
        @media (min-width: 630px) {
            width: 450px;
        }
        @media (min-width: 400px) and (max-width: 630px) {
            width: 250px;
        }
        @media (max-width: 400px) {
            width: 180px;
        }

        h4 {
            font-weight: 400;

            @media (min-width: 630px) {
                font-size: 2.5em;
                letter-spacing: 0.83px;
            }
            @media (max-width: 630px) {
                font-size: 1.5em;
            }
        }

        p {
            color: #6f6f6f;
            margin-top: 10px;
        }

    }

    i {
        margin-right: 20px;
        transition: all 500ms ease;
    }
}
</style>