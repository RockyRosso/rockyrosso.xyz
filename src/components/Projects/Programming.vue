<template>
    <div class="grid-list">
        <div v-for="project in webProjects">
            <LinkDisplay v-if="project.type === 'link'" :project="project" />
            <GalleryDisplay
                v-if="project.type === 'gallery'"
                :project="project"
            />
            <div>
                <a v-if="project.source && project.source !== ''" :href="project.source" target="_blank" class="button"><span><i class="fa-brands fa-github"></i></span> Source Code</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import LinkDisplay from "./Displays/Link.vue";
import GalleryDisplay from "./Displays/Gallery.vue";

defineProps({
    webProjects: Array<any>,
});
</script>
