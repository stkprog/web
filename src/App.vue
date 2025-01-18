<script setup>
    import LargeHeader from "@/components/LargeHeader.vue";
    import ProjectShowcaseBox from "@/components/ProjectShowcaseBox.vue";
    import Introduction from "./components/Introduction.vue";
    import PageFooter from "./components/PageFooter.vue";
</script>

<template>
    <main class="bg-cover bg-fixed bg-stkBlue-300 bg-clouds pt-16">
        <LargeHeader/>

        <Introduction/>

        <ProjectShowcaseBox 
            projectTitle="music-manager"
            projectText="Ever since switching to Linux, I've gotten to try out plenty of TUI software, and I think that it's just super fun. It took me a while to find a library that was easy enough to grasp and had the functionalities I needed, but with the help of asciimatics, I was able to make a little program that will assist me keep track of music I've listened to."
            projectImageName="music-manager.png"
            projectLink="https://github.com/stkprog/music-manager"
        />

        <ProjectShowcaseBox
            projectTitle="xfce4-settings-extractor"
            projectText="This handy little python program uses the 'xfconf-query' utility that comes with Xfce4 in order to store all the current settings into an executable shell script. I love customizing my desktop, so a tool like this that essentially archives all my themes is great. "
            projectImageName="xfce4-settings-extractor.png"
            projectLink="https://github.com/stkprog/xfce4-settings-extractor"
        />
    
        <PageFooter/>
    </main>
</template>

<style scoped>
</style>
