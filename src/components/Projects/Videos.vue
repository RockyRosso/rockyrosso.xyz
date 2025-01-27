<template>
    <div class="grid-list">
        <div v-for="project in webProjects">
            <VideoDisplay v-if="project.type === 'video'" :project="project" />
        </div>
    </div>
</template>

<script setup lang="ts">
import VideoDisplay from "./Displays/Video.vue";

defineProps({
    webProjects: Array<any>,
});
</script>
