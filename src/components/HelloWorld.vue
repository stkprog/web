<script setup>
    import { ref } from 'vue'

    defineProps({
        msg: String,
    })

    const count = ref(0)
</script>

<template>
    <h1>{{ msg }}</h1>
    <p class="text-cyan-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum officia aliquid autem reprehenderit hic temporibus, quasi cumque? Tenetur repellat, saepe earum ipsam, sequi at voluptatem placeat incidunt dolore numquam harum neque! Aut officia, esse fuga aliquid fugit ipsam laudantium enim rerum provident cupiditate ducimus. Perspiciatis labore dolore sunt. Tempore iure delectus quo tempora! Autem repellat ut eos dolore temporibus perferendis, maiores fugiat tenetur accusantium. Voluptatibus error deleniti recusandae necessitatibus quibusdam cum itaque debitis, ex eum ab ad earum quae vel quisquam nobis iste ipsum molestiae laudantium? Id nisi mollitia accusantium possimus ipsa amet quod quae quaerat natus? Officia, dolorem repellat?</p>
</template>

<style scoped>

</style>