<script setup>
    import SvgCircle from "./SvgCircle.vue";
</script>

<template>
    <footer class="border-stkBlue-300 border-t-4 bg-footer bg-center text-stkBlue-600 bg-stkPurple-500  font-bigtext bottom-0 mt-16 p-5 pt-6 text-center">
        <p class="font-big text-stkGray-500">
            Powered by
            <a class="text-stkBlue-500 hover:text-white underline transition ease-linear duration-200" href="https://vuejs.org/" target="_blank">
                Vue
            </a>
            ,
            <a class="text-stkBlue-500 hover:text-white underline transition ease-linear duration-200" href="https://tailwindcss.com/" target="_blank">
                Tailwind
            </a>
            and
            <a class="text-stkBlue-500 hover:text-white underline transition ease-linear duration-200" href="https://krita.org/en/" target="_blank">
                Krita
            </a>
            
        </p>

        <div class="flex justify-center">
            <div id="c-left" class="flex mr-3 -translate-y-1.5">
                <SvgCircle radius=2.5 class="circle" />
                <SvgCircle radius=3.5 class="circle" />
                <SvgCircle radius=4 class="circle" />
                <SvgCircle radius=4.5 class="circle" />
                <SvgCircle radius=3.5 class="circle" />
                <SvgCircle radius=3 class="circle" />
            </div>

            <p class="text-stkGray-500">
                Hosted by <a class="text-stkBlue-500 hover:text-white underline transition ease-linear duration-200" href="https://pages.github.com/" target="_blank">GitHub</a>
            </p>

            <div id="c-right" class="flex ml-3 -translate-y-1.5">
                <SvgCircle radius=2.5 class="circle" />
                <SvgCircle radius=3.5 class="circle" />
                <SvgCircle radius=4 class="circle" />
                <SvgCircle radius=4.5 class="circle" />
                <SvgCircle radius=3.5 class="circle" />
                <SvgCircle radius=3 class="circle" />
            </div>
        </div>

        <p class="-mt-1 text-stkGray-500">
            2025 <span class="font-titles text-lg">&copy;</span> stkprog
        </p>
    </footer>
</template>

<style scoped>
    footer {
        box-shadow:0 -10px 15px, 0 -4px 6px;
    }

    .circle {
        animation: moving-circle 1s infinite alternate-reverse ease-in-out;
        counter-reset: circleN;
    }

    /* Possible shorthand: */
    /* #c-left .circle:nth-last-child(-n+6), #c-right .circle:nth-child(-n+6) */
    /* But can't use n in scope block */

    #c-left .circle:nth-child(1), #c-right .circle:nth-child(6) {
        animation-delay: 0s;
    }

    #c-left .circle:nth-child(2), #c-right .circle:nth-child(5) {
        animation-delay: 0.20s;
    }

    #c-left .circle:nth-child(3), #c-right .circle:nth-child(4) {
        animation-delay: 0.4s;
    }

    #c-left .circle:nth-child(4), #c-right .circle:nth-child(3) {
        animation-delay: 0.6s;
    }

    #c-left .circle:nth-child(5), #c-right .circle:nth-child(2) {
        animation-delay: 0.8s;
    }

    #c-left .circle:nth-child(6), #c-right .circle:nth-child(1) {
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