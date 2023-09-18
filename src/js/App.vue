<template>
    <div class="wrapper">
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>


<script>

</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

// Переменные
$mainColor: #000;
$textColor: #fff;
$additionColor: #25AB75;

// Свойство для изменения цвета фона выделения текста
::selection {
    background-color: $additionColor;
}

// Общие стили к сайту
* {
    margin: 0;
    padding: 0;
}

body {
    background-color: $mainColor;
    color: $textColor;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1em;
}

// Скрыть все, что выходит за ширину экрана
.wrapper {overflow: hidden;}

a {
    color: #ababab;
    text-decoration: none;

    &:hover {
        color: #c7c7c7;
    }
}

// Адаптивность к ширине сайта
.container {
    @media (min-width: 1500px) {
        width: 1300px;
        margin: 0 auto;
    }
    @media (max-width: 1500px) and (min-width: 900px) {
        width: 80%;
        margin: 0 10%;
    }
    @media (max-width: 900px) {
        width: 90%;
        margin: 0 5%;
    }
}
</style>