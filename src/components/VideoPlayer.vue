<template>
    <div
        class="vid-container"
        @mouseenter="isMouseOnPlayer = true"
        @mouseleave="isMouseOnPlayer = false"
        @mousemove="mouseMove"
    >
        <video
            ref="videoPlayer"
            @timeupdate="updateProgress"
            @ended="isPlaying = false"
            @click="togglePlay"
            class="vid"
        >
            <source :src="src" type="video/mp4" />
        </video>

        <div class="vid-controls" ref="videocontrols">
            <div class="vid-controls-options primary">
                <button @click="togglePlay" class="vid-controls-option">
                    <i class="fa-solid fa-play" v-if="!isPlaying"></i
                    ><i class="fa-solid fa-pause" v-if="isPlaying"></i>
                </button>
                <div
                    ref="videoProgressBar"
                    @mouseleave="mouseDown = false"
                    @mousemove="mouseDown && changeProgress($event)"
                    @mousedown="mouseDown = true"
                    @mouseup="mouseDown = false"
                    @click="changeProgress"
                    class="vid-progress"
                >
                    <div
                        :style="`flex-basis: ${progress}%`"
                        class="vid-progress-filled"
                    ></div>
                </div>
            </div>

            <div
                style="justify-content: end"
                class="vid-controls-options secondary"
            >
                <div style="display: flex; align-items: center">
                    <button class="vid-controls-option">
                        <i class="fa-solid fa-volume-high"></i>
                    </button>

                    <div>
                        <input
                            @input="updateVolume"
                            v-model="volume"
                            class="vid-controls-volume"
                            type="range"
                            min="0"
                            max="100"
                        />
                    </div>
                </div>

                <div>
                    <button
                        @click="toggleFullscreen"
                        class="vid-controls-option"
                    >
                        <i class="fa-solid fa-expand"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style src="../assets/styles/components/videoPlayer.scss" />

<script setup lang="ts">
import { onMounted, ref } from "vue";

const isPlaying = ref(false);
const initialPlay = ref(false);
const mouseDown = ref(false);
const volumeHover = ref(false);

const progress = ref(0);
const volume = ref(100);
const controlsFadeTime = ref(2000);
const lastMouseMovement = ref(0);
const isMouseOnPlayer = ref(false);

const videoPlayer = ref();
const videocontrols = ref();
const videoProgressBar = ref();

defineProps({
    src: String,
});

onMounted(() => {
    const video = videoPlayer.value;
    video.load();
});

function toggleFullscreen() {
    const video = videoPlayer.value;

    if (video.requestFullscreen) {
        video.requestFullscreen();
    }

    if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    }

    if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
}

function togglePlay() {
    let video = videoPlayer.value;

    if (!video) return;
    if (video.tagName !== "VIDEO") {
        video = videoPlayer.value;
    }

    if (video.paused) {
        video.play();
        isPlaying.value = true;
        return;
    }

    video.pause();
    isPlaying.value = false;
}

function updateVolume() {
    const video = videoPlayer.value;
    video.volume = volume.value / 100;
}

function updateProgress() {
    const video = videoPlayer.value;
    const videoControls = videocontrols.value;

    if (!video) return;

    progress.value = (video.currentTime / video.duration) * 100;

    if (!videoControls) return;

    if (progress.value === 100 || progress.value === 0) {
        return videoControls.classList.remove("fade-anim");
    }

    console.log(Date.now() - lastMouseMovement.value, controlsFadeTime.value);

    if (Date.now() - lastMouseMovement.value < controlsFadeTime.value)
        return videoControls.classList.remove("fade-anim");
    if (!isPlaying.value) return videoControls.classList.remove("fade-anim");
    console.log("hi");

    videoControls.classList.add("fade-anim");
}

function changeProgress(event: MouseEvent) {
    const video = videoPlayer.value;
    const progressBar = videoProgressBar.value;

    const newTime = (event.offsetX / progressBar.offsetWidth) * video.duration;
    video.currentTime = newTime;
}

function mouseMove() {
    const videoControls = videocontrols;

    if (!videoControls) return;

    lastMouseMovement.value = Date.now();
}
</script>
