<template>
    <div class="head">
        <div class="promotion">
            <span>NEW</span>
            Новая интенсивная тренировка 
        </div>
        <div class="lead">
            <div>
                <h1>Cardio<br>Exercise</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div class="lead__buttons">
                    <button>Начать</button>
                    <button>Детальнее</button>
                </div>
            </div>
            <div>
                <img src="/img/lead-girl.png" alt="Workout">
                <div class="lead__info">
                    <div class="lead__info__time">
                        <span>{{ showTime }}</span>
                        ВРЕМЯ
                    </div>
                    <div class="lead__info__cl">
                        <span>165</span>
                        КАЛОРИИ
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            showTime: '40:00',
            timerCount: 39 * 60,
        }
    },
    watch: {
        timerCount: {
            handler() {
                setTimeout(() => {
                    // Условие остановки таймера
                    if(this.timerCount <= 0) return;

                    this.timerCount--;
                    const minutes = Math.ceil(this.timerCount / 60);
                    const seconds = this.timerCount - minutes * 60 + 60;
                    let txtSeconds = 0;

                    if(seconds == 60)
                        txtSeconds = '00'
                    else if(seconds < 10 && seconds > 0)
                        txtSeconds = '0' + seconds
                    else
                        txtSeconds = seconds

                    this.showTime = (txtSeconds == '00' ? minutes + 1 : minutes) + ':' + txtSeconds
                }, 1000)
            },
            // Автоматический вызов функции при загрузке сайта
            immediate: true
        }
    }
}
</script>


<style lang="scss" scoped>
.head {
    margin-top: 80px;

    @media (min-width: 1024px) {
        // Убираем пустоту справа и снизу блока
        overflow: hidden;
        // Отдельная высота блока
        height: 800px;
    }
}

@keyframes pulse {
    0% {
        transform: scale(0.95);
    }
    100% {
        transform: scale(1);
    }
}

.promotion {
    background-color: #191919;
    border-radius: 200px;
    padding: 10px 5px;
    color: #d1d1d1;
    width: 350px;

    animation: pulse infinite ease-in-out 1.5s alternate;

    @media (min-width: 450px) {
        width: 350px;
    }
    @media (max-width: 450px) {
        width: 270px;
        font-size: 0.85em;
    }

    span {
        background-color: #25AB75;
        border-radius: 200px;
        padding: 5px 10px;
        color: #fff;
        margin-right: 10px;
        font-weight: 600;
    }
}

.lead {
    margin-top: 20px;
    display: flex;
    position: relative;

    h1 {
        letter-spacing: -2px;

        @media (min-width: 1500px) {
            font-size: 12em;
            line-height: 170px;
        }
        @media (max-width: 1500px) and (min-width: 1300px) {
            font-size: 11em;
            line-height: 160px;
        }
        @media (max-width: 1300px) and (min-width: 650px) {
            font-size: 8.5em;
            line-height: 130px;
        }
        @media (max-width: 650px) and (min-width: 450px) {
            font-size: 5.5em;
            line-height: 80px;
        }
        @media (max-width: 450px) {
            font-size: 4em;
            line-height: 60px;
        }
    }

    p {
        color: #868686;
        margin: 20px 0;

        @media (min-width: 650px) {
            width: 550px;
        }
    }

    .lead__buttons > button {
        background-color: #191919;
        padding: 20px;
        width: 160px;
        font-weight: 600;
        font-size: 1.02em;
        color: #fff;
        border: 0;
        cursor: pointer;
        border-radius: 10px;
        margin-top: 30px;
        transition: transform 500ms ease;

        &:first-of-type {
            background-color: #25AB75;
            margin-right: 35px;
        }

        &:hover {
            transform: translateY(-7px);
        }
    }

    > div:last-of-type {
        @media (max-width: 1024px) {
            display: none;
        }

        img {
            position: relative;

            @media (min-width: 1500px) {
                bottom: 260px;
                right: 290px;
            }
            @media (max-width: 1500px) and (min-width: 1300px) {
                transform: scale(0.9);
                bottom: 280px;
                right: 290px;
            }
            @media (max-width: 1300px) and (min-width: 650px) {
                transform: scale(0.75);
                bottom: 340px;
                right: 290px;
            }
        }

        .lead__info {
            position: absolute;
            top: 0;
            right: 0;

            @mixin info-block {
                background-color: #191919;
                border-radius: 20px;
                padding: 15px 30px;
                width: 100px;
                font-size: 0.8em;
                margin-bottom: 25px;

                span {
                    font-weight: 600;
                    font-size: 3em;
                    display: block;
                }
            }

            .lead__info__time {
                @include info-block;
                
                span {color: #FFE642;}
            }

            .lead__info__cl {
                @include info-block;
                
                span {color: #FB1351;}
            }
        }
    }
}
</style>