<script setup>
    const props = defineProps({
        radius: {
            type: Number,
            default: 4
        }
    })
</script>

<template>
    <svg class="mx-1 sm:my-1 md:-my-0" :height="radius * 2" :width="radius * 2" xmlns="http://www.w3.org/2000/svg">
        <circle id="c" :r="radius" :cx="radius" :cy="radius" fill="white"/>
    </svg>
</template>

<style scoped>
</style>