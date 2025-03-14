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

        <!-- <a class='text-stkBlue-500 underline hover:text-white transition ease-linear duration-200' href='link' target='_blank'>site</a> -->
        <ProjectShowcaseBox
            projectTitle="yt-to-ft-playlists"
            projectText="In my recent de-googling endeavours I've come to realize that I will probably not find a suitable replacement for YouTube in the near future - too many channels that I enjoy are only on this platform, not to mention music as well. I will have to keep using it, but luckily there are projects like <a class='text-stkBlue-500 underline hover:text-white transition ease-linear duration-200' href='https://freetubeapp.io/' target='_blank'>FreeTube</a> which aim to make the experience a little more privacy friendly (and I especially enjoy that you can simply remove certain parts of the GUI from view, like recommended videos!). I wasn't able to find a way to easily import playlists from YouTube, so I made yet another python script for exactly that purpose. It uses <a class='text-stkBlue-500 underline hover:text-white transition ease-linear duration-200' href='https://github.com/yt-dlp/yt-dlp' target='_blank'>yt-dlp</a> to get the needed data in JSON-form, which is processed and then added to FreeTube's database."
            projectImageName="ytftpl.png"
            projectImageAltText="Two windows showing the same playlist, YouTube on the left and FreeTube on the right."
            projectLink="https://github.com/stkprog/yt-to-ft-playlists"
        />

        <ProjectShowcaseBox 
            projectTitle="music-manager"
            projectText="Ever since switching to Linux, I've gotten to try out plenty of TUI software, and I think that it's just super fun. It took me a while to find a library that was easy enough to grasp and had the functionalities I needed, but with the help of <a class='text-stkBlue-500 underline hover:text-white transition ease-linear duration-200' href='https://github.com/peterbrittain/asciimatics' target='_blank'>asciimatics</a>, I was able to make a little program that will assist me keep track of music I've listened to."
            projectImageName="music-manager.png"
            projectImageAltText="A terminal user interface program showing a bucket list and a listened list of songs. The user can give their 1 to 10 rating and their thoughts as well."
            projectLink="https://github.com/stkprog/music-manager"
        />

        <ProjectShowcaseBox
            projectTitle="xfce4-settings-extractor"
            projectText="This handy python program uses the 'xfconf-query' utility that comes with Xfce4 in order to store all the current settings into an executable shell script. I love customizing my desktop, so a tool like this that essentially archives all my themes is great. "
            projectImageName="xfce4-settings-extractor.png"
            projectImageAltText="A bash script showing commands that change settings in the Xfce4 desktop environment."
            projectLink="https://github.com/stkprog/xfce4-settings-extractor"
        />
    
        <PageFooter/>
    </main>
</template>

<style scoped>
</style>
