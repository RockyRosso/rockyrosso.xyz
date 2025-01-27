<template>
    <div class="project-container web">
        <div>
            <h1 class="title">{{ project?.title }}</h1>
            <div>
                <p data-txt-style="sub">{{ project?.description }}</p>
            </div>
        </div>
        <div>
            <EmbedVideoPlayer
                v-if="project?.embed"
                :video-embed-url="project?.videoLink"
            />
            <VideoPlayer v-if="!project?.embed" :src="project?.videoLink" />
        </div>
        <hr style="margin: 5rem" />
    </div>
</template>

<script setup lang="ts">
import EmbedVideoPlayer from "./../../EmbedVideoPlayer.vue";
import VideoPlayer from "../../VideoPlayer.vue";

defineProps({
    project: Object,
});
</script>
