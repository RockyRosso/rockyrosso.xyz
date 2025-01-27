<template>
    <div class="project-container web">
        <TitleComponent
            :title="project?.title"
            :description="project?.description"
        />

        <div class="gallery-content">
            <div class="gallery-images">
                <div
                    v-if="displayedImages.length > 0"
                    v-for="index in maxProjectsDisplayedImages"
                >
                    <img
                        :style="`width: ${displayedImages.length === 1 ? '100%;' : ''}`"
                        id="img"
                        :src="displayedImages[index - 1]?.image"
                    />
                </div>
            </div>
            <div class="gallery-videos">
                <div
                    style="margin-top: 1rem"
                    v-if="displayedVideos.length > 0"
                    v-for="index in maxProjectsDisplayedVideos"
                >
                    <VideoPlayer :src="displayedVideos[index - 1]?.videoLink" />
                </div>
            </div>

            <div>
                <button
                    v-if="showViewMoreButton && displayedVideos.length > 2"
                    @click="
                        maxProjectsDisplayedVideos = displayedVideos.length;
                        maxProjectsDisplayedImages = displayedImages.length;
                        showViewMoreButton = false;
                    "
                >
                    View More...
                </button>
            </div>
        </div>

        <MadeWithComponent :made-with-list="project?.madeWith" />
    </div>
</template>

<style scoped src="../../../assets/styles/components/gallery.scss" />

<script setup lang="ts">
import { ref } from "vue";
import VideoPlayer from "../../VideoPlayer.vue";
import MadeWithComponent from "./Components/MadeWith.vue";
import TitleComponent from "./Components/Title.vue";

const props = defineProps({
    project: Object,
});

const media = props.project?.media;

const displayedImages = ref<any[]>(media.filter((item: any) => item.image));
const displayedVideos = ref<any[]>(media.filter((item: any) => item.videoLink));

const maxProjectsDisplayedImages = ref(
    displayedImages.value.length > 2 ? 2 : displayedImages.value.length,
);
const maxProjectsDisplayedVideos = ref(
    displayedVideos.value.length > 2 ? 2 : displayedVideos.value.length,
);

const showViewMoreButton = ref(true);
</script>
