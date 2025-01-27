<template>
    <div class="grid-list">
        <div v-for="project in webProjects">
            <GalleryDisplay
                v-if="project.type === 'gallery'"
                :project="project"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import GalleryDisplay from "./Displays/Gallery.vue";

defineProps({
    webProjects: Array<any>,
});
</script>
