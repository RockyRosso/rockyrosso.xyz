<template>
    <div class="vid-embed-container">
        <iframe
            class="vid-embed"
            :src="videoEmbedUrl"
            frameborder="0"
            allowfullscreen
        ></iframe>
    </div>
</template>

<style src="../assets/styles/components/videoPlayer.scss" />

<script setup lang="ts">
defineProps({
    videoEmbedUrl: String,
});
</script>
