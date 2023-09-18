<template>
    <div class="head">
        <div class="lead">
            <div>
                <h1>Cardio<br>Exercise</h1>
                <p>Огромный выбор материалов о здоровье и фитнесе, полезных рецептов и историй преображения, которые помогут вам привести себя в форму и оставаться в форме!</p>
                <button>Присоединяйтесь</button>
                <img src="/img/companies.png" alt="Companies">
            </div>
            <div>
                <img src="/img/lead-man.png" alt="Workout">
                <div class="lead__info">
                    <div class="lead__info__km">
                        <i class="fa-solid fa-person-running"></i>
                        <span>4,95</span>km
                    </div>
                    <div class="lead__info__training">
                        <i class="fa-solid fa-play"></i>
                        <span>350+</span>
                        Тренировок
                    </div>
                    <div class="lead__info__videos">
                        <span>500+</span>
                        Бесплатных видео
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {}
</script>


<style lang="scss" scoped>
.head {
    margin-top: 80px;

    @media (min-width: 1024px) {
        overflow: hidden;
        height: 800px;
    }
}

.lead {
    margin-top: 20px;
    display: flex;
    position: relative;

    > div:first-of-type {
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
                width: 500px;
            }
        }

        button {
            background-color: #E6533C;
            padding: 20px;
            font-weight: 600;
            font-size: 1.02em;
            color: #fff;
            border: 0;
            cursor: pointer;
            border-radius: 10px;
            margin-top: 30px;
            transition: transform 500ms ease;

            &:hover {
                transform: translateY(-7px);
            }
        }

        img {
            display: block;
            margin-top: 70px;
            
            @media (min-width: 1300px) {
                max-width: 100%;
            }
            @media (max-width: 1300px) and (min-width: 650px) {
                max-width: 500px;
            }
            @media (max-width: 650px) {
                max-width: 100%;
            }
        }
    }

    > div:last-of-type {
        @media (max-width: 1024px) {
            display: none;
        }

        img {
            position: relative;

            @media (min-width: 1500px) {
                top: 90px;
                right: 80px;
            }
            @media (max-width: 1500px) and (min-width: 1300px) {
                transform: scale(0.9);
                top: 60px;
                right: 90px;
            }
            @media (max-width: 1300px) and (min-width: 650px) {
                transform: scale(0.75);
                top: -10px;
                right: 100px;
            }
        }

        .lead__info {
            position: absolute;
            top: 0;
            right: 0;

            @mixin info-block {
                border-radius: 12px;
                padding: 15px 30px;
                width: 120px;
                font-size: 0.8em;
                margin-bottom: 25px;
                position: relative;

                span {
                    font-weight: 600;
                    color: #fff;
                }

                i {
                    padding: 10px;
                    border-radius: 50%;
                    color: #fff;
                    font-size: 1.3em;
                    text-align: center;
                    width: 14px;
                    height: 14px;
                    line-height: 14px;
                }
            }

            .lead__info__km {
                @include info-block;

                background-color: #EF8964;
                color: #EFCABA;
                right: 80px;
                top: 40px;
                
                span {
                    font-size: 2.7em;
                    margin-right: 4px;
                    letter-spacing: -1px;
                }

                i {
                    display: block;
                    background-color: #EFA082;
                }
            }

            .lead__info__training {
                @include info-block;

                background-color: #303030;
                color: #ACABA8;
                
                @media (min-width: 1450px) {
                    right: 520px;
                    top: 300px;
                }
                @media (min-width: 1300px) and (max-width: 1450px) {
                    right: 400px;
                    top: 300px;
                }
                @media (max-width: 1300px) {
                    right: 350px;
                    top: 200px;
                }
                
                span {
                    font-size: 1.7em;
                }

                i {
                    background-color: #EF8963;
                    float: left;
                    position: relative;
                    top: 10px;
                    margin-right: 7px;
                }
            }

            .lead__info__videos {
                @include info-block;

                background-color: #7A29DC;
                color: #C6A8E4;
                right: 70px;

                @media (min-width: 1300px) {
                    top: 300px;
                }
                @media (max-width: 1300px) {
                    top: 200px;
                }
                
                span {
                    font-size: 2.3em;
                    letter-spacing: 1px;
                }
            }
        }
    }
}
</style>