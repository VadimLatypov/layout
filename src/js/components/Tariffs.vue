<template>
    <div>
        <h3>Тарифы</h3>
        <div class="tariffs">
            <div>
                <h4>Бесплатно</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Quis nostrud exercitation ullamco</li>
                    <li>Exercitation ullamco</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Excepteur sint occaecat excepteur sint occaecat</li>
                    <li>Sed ut perspiciatis unde omnis</li>
                </ul>
                <span><a href="">Больше</a> <i class="fa-solid fa-arrow-right"></i></span>
            </div>
            <div>
                <h4>Плюс+</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Quis nostrud exercitation ullamco</li>
                    <li>Exercitation ullamco</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Excepteur sint occaecat excepteur sint occaecat</li>
                    <li>Sed ut perspiciatis unde omnis</li>
                    <li>Exercitation ullamco</li>
                    <li>Lorem ipsum dolor sit amet</li>
                </ul>
                <button>Присоединиться</button>
            </div>
        </div>
    </div>
</template>


<script>
export default {}
</script>


<style lang="scss" scoped>
h3 {
    margin: 70px 0;
    font-size: 3em;
    font-weight: 400;
}

.tariffs {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    mix-blend-mode: 150px;

    > div {
        background-color: #232532;
        color: #A8A7A8;
        padding: 50px 5%;

        @media (min-width: 1100px) {
            width: 30%;
        }
        @media (min-width: 750px) and (max-width: 1100px){
            width: 39%;
        }
        @media (max-width: 750px) {
            margin-bottom: 50px;
        }

        &:last-of-type {
            background-color: #323443;
            color: #ADACAE;
        }

        h4 {
            color: #fff;
            text-align: center;
            font-size: 2em;
            margin-bottom: 30px;
        }

        ul {
            margin: 20px 30px;
        }

        span {
            a {
                color: #0070C9;
            }

            i {
                margin-left: 10px;
                font-size: 1.2em;
            }
        }

        button {
            background-color: #0070C9;
            border: 0;
            border-radius: 10px;
            color: #fff;
            padding: 5px 7px;
            cursor: pointer;

            &:hover {
                background-color: #044880;
            }
        }
    }
} 
</style>