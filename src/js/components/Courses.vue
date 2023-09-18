<template>
    <div>
        <div class="heading">
            <h2>Популярные Тренировки</h2>
            <a href="#">ПОСМОТРЕТЬ БОЛЬШЕ</a>
        </div>
        <div class="courses">
            <div class="courses__item" v-for="el in courses" :key="el.title">
                <img :src="'/img/' + el.img" :alt="el.title">
                <h2>{{ el.title }}</h2>
                <p>{{ el.cl }}</p>
                <div class="time">{{ el.time }}</div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: ['coursesData'],
    created() {
        this.courses = this.coursesData
    },
    data() {
        return {
            courses: []
        }
    }
}
</script>


<style lang="scss" scoped>
.heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    letter-spacing: 0.3px;

    @media (max-width: 1024px) {
        margin-top: 70px;
    }

    h1 {
        font-size: 2.1em;
    }

    a {
        font-size: 0.7em;
        letter-spacing: 1.5px;
    }
}

.courses {
    margin-bottom: 120px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 950px) {
        justify-content: center;
        flex-direction: column;
    }
    @media (min-width: 950px) {
        justify-content: space-between;
    }

    .courses__item {
        margin-bottom: 50px;
        cursor: pointer;
        position: relative;
        overflow: hidden;

        @media (max-width: 950px) and (min-width: 440px) {
            width: 373px;
            margin-left: auto;
            margin-right: auto;
        }
        @media (max-width: 440px) {
            width: 100%;
        }

        img {
            opacity: 0.8;
            transition: all 500ms ease;

            @media (max-width: 440px) {
                width: 100%;
            }

            &:hover {
                opacity: 1;
                transform: scale(1.1);
            }
        }

        h2 {
            font-size: 2.2em;
            margin-left: 10px;
            position: relative;
            bottom: 35px;
        }

        p {
            color: #ababab;
            font-size: 0.9em;
            margin-left: 10px;
            position: relative;
            bottom: 35px;
        }

        .time {
            position: absolute;
            right: 0;
            bottom: 60px;
            background-color: #000;
            padding: 3px 8px;
            font-weight: 600;
            border-top-left-radius: 5px;
        }
    }
}
</style>