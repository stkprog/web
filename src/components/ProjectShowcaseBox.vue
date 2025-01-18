<script setup>
    import SvgCircle from "./SvgCircle.vue";

    const props = defineProps({
        projectTitle: {
            type: String,
            default: "",
        },
        projectText: {
            type: String,
            default: "",
        },
        projectImageName: {
            type: String,
            default: "",
        },
        projectImageAltText: {
            type: String,
            default: "",
        },
        projectLink: {
            type: String,
            default: "",
        },
    });

    function getImageURL() {
        return new URL(`../assets/img/${props.projectImageName}`, import.meta.url)
    }
</script>

<template>
    <div class="shadow-lg shadow-stkBlue-600 w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 xxl:w-1/2 mx-auto mt-8 mb-16 pt-3 bg-gradient-to-b from-stkTeal-500 to-stkTeal-600 border-stkBlue-300 rounded-none sm:rounded-2xl border-4 border-x-0 sm:border-x-4">
        <article>
            <div class="flex justify-center align-text-top mb-3">
                <SvgCircle class="circle"/>
                <SvgCircle radius=5 class="circle"/>
                <SvgCircle class="mr-3 circle"/>
                <h2 class="bg-transparent bg-clip-text text-transparent bg-gradient-to-b from-stkBlue-500 to-stkGray-500 text-[5vw] md:text-3xl font-titles">{{ projectTitle }}</h2>
                <SvgCircle class="ml-3 circle"/>
                <SvgCircle radius=5 class="circle"/>
                <SvgCircle class="circle"/>
            </div>

            <img :src="getImageURL()" :alt="projectImageAltText" class="w-full sm:w-11/12 lg:w-3/4 mx-auto mb-6  rounded-none sm:rounded-sm border-solid border-white border-4 border-x-0 sm:border-x-4" alt="">

            <div class="px-6 pb-4 text-lg lg:text-xl font-bigtext text-stkGray-500">
                <p class="text-justify">{{ projectText }}</p>
                <p class="text-center mt-4">
                    Found <a class="underline font-bold text-stkBlue-500 hover:text-white transition ease-linear duration-200" :href="projectLink" target="_blank">here</a>
                </p>
            </div>
        </article>
    </div>
</template>

<style scoped>
    .circle {
        animation: moving-circle 1s infinite alternate-reverse ease-in-out;
    }

    .circle:nth-child(odd) {
        animation-delay: 1s;
    }

    @keyframes moving-circle {
        from {
            transform: translateY(11px);
        }
        to {
            transform: translateY(24px);
        }
    }
</style>