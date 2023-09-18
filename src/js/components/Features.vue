<template>
    <div>
        <div class="features">
            <div class="features__heading">
                <img src="/img/yellow-line.svg" alt="Workout">
                <h3>Тренировки Специально Для тебя</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing.</p>
            <button type="submit">Начать</button>
        </div>
        <div class="pictures">
            <div class="leftPicture">
                <img src="/img/trainer-1.png" alt="Trainer">
                <h4>Саманта Вильям</h4>
                <p>Тренер</p>
            </div>
            <div class="middle">
                <img src="/img/trainer-2.png" alt="Trainer">
                <h4>Алина Реймонд</h4>
                <p>Тренер</p>
            </div>
            <div class="big">
                <img src="/img/trainer-3.png" alt="Trainer">
                <h4>Джонатан Вайз</h4>
                <p>Тренер</p>
            </div>
        </div>
    </div>
</template>


<script>
export default {

}
</script>


<style lang="scss" scoped>
.features {
    width: 1500px;
    padding: 120px 5% 270px 15%;
    background-color: #191919;
    position: relative;

    @media (min-width: 1380px) {
        margin-left: 391px;
    }
    @media (max-width: 1380px) and (min-width: 1100px) {
        margin-left: 191px;
    }
    @media (min-width: 1100px) {
        padding: 120px 5% 270px 15%;
    }
    @media (max-width: 1100px) {
        padding: 50px;
    }

    .features__heading {
        @media (min-width: 1100px) {
            position: absolute;
            top: 0px;
            left: -240px;
        }

        h3 {
            @media (min-width: 1100px) {
                position: relative;
                top: -100px;
            }
            @media (max-width: 1100px) {
                position: relative;
                top: -165px;
            }
            @media (min-width: 560px) {
                font-size: 4.5em;
                width: 500px;
            }
            @media (max-width: 560px) {
                position: relative;
                top: -90px;
                font-size: 2.3em;
                width: 300px;
            }
        }

        img {
            @media (min-width: 1100px) {
                position: relative;
                top: 335px;
                left: -50px;
            }
            @media (max-width: 1100px) {
                position: relative;
                top: 270px;
                left: -50px;
            }
            @media (max-width: 560px) {
                width: 300px;
                position: relative;
                top: 150px;
                left: -20px;
            }
        }
    }

    p {
        color: #ababab;
        font-size: 1.3em;
        line-height: 170%;
        width: 500px;

        @media (min-width: 1100px) {
            margin-left: 150px;
        }
        @media (max-width: 560px) and (min-width: 440px) {
            font-size: 1em;
            width: 350px;
        }
        @media (max-width: 440px) {
            font-size: 1em;
            width: 230px;
        }
    }

    button {
        background-color: #25AB75;
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

        @media (min-width: 1100px) {
            margin-left: 150px;
        }

        &:hover {
            transform: translateY(-7px);
        }
    }
}

.pictures {
    display: flex;

    @media (min-width: 1380px) {
        padding-left: 70px;
    }
    @media (max-width: 1380px) and (min-width: 1100px) {
        position: relative;
        left: -130px;
    }
    @media (max-width: 1100px) {
        flex-wrap: wrap;
        justify-content: space-between;
    }

    > div {
        @media (min-width: 1100px) {
            position: relative;
        }
        @media (max-width: 1100px) {
            margin-top: 50px;
        }
        @media (max-width: 520px) {
            margin-left: auto;
            margin-right: auto;
        }
        
        img {
            @media (max-width: 520px) {
                width: 300px;
            }
        }

        &.leftPicture {
            @media (min-width: 600px) and (max-width: 1100px) {
                margin-right: 50px;
            }

            h4, p {
                @media (min-width: 1100px) and (max-width: 1380px) {
                    margin-left: 30px;
                }
            }
        }

        &.middle {
            top: 321px;
        }

        &.big {
            top: -193px;

            h4, p {
                @media (min-width: 1100px) {
                    margin-left: 15px;
                }
            }
        }

        h4 {
            font-weight: 400;
        }

        p {
            color: #ababab;
            font-size: 0.9em;
        }
    }
}
</style>