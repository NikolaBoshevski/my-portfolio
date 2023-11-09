<template>
    <div :style="{ backgroundColor: bgColor, color: textColor, padding: padding }">
        <h4 class="font-bold mb-4">{{ name }} </h4>
        <h2 class="font-black text-4xl pb-4">{{ title }}</h2>
        <p class="pb-4 font-light text-base">{{ content }}</p>
        <p class="pb-4 font-light">{{ content2 }}</p>
        <p class="pb-4 font-light">{{ content3 }}</p>

        <div class="pb-12" :class="float">
            <p class="font-bold ">{{ text }}</p>
            <NuxtImg sizes="10vw" :src="`${img}`"></NuxtImg>
        </div>
    </div>
</template>

<script >
export default {
    props: {
        bgColor: String,
        padding: String,
        name: String,
        title: String,
        content: String,
        content2: String,
        content3: String,
        text: String,
        textColor: String,
        img: String,
        float: String,

    }
}
</script>
