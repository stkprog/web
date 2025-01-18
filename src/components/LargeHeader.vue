<script setup>
    import bgImage from "@/assets/img/moving-bg.png";
</script>

<template>
    <header class="shadow-lg shadow-stkBlue-600 border-stkBlue-300 border-y-4 text-center md:text-left m-0 mb-8 p-5 pl-8" :style="{backgroundImage: 'URL(' + bgImage + ')'}">
        <h1 class="text-6xl sm:text-8xl font-titles bg-clip-text text-transparent bg-gradient-to-b from-stkBlue-500 to-stkGray-500">Hello there!</h1>
    </header>
</template>

<style scoped>
    header {
        background-attachment: fixed;
        background-repeat: repeat;
        animation: moving-header-bg 5s infinite alternate-reverse ease-in-out;
    }

    @keyframes moving-header-bg {
        from {
            background-position: 0vw 0px;
        }
        to {
            background-position: 100vw 0px;
        }
    }
</style>
