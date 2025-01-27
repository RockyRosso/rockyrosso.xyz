<template>
    <div class="project-container web">
        <TitleComponent
            :title="project?.title"
            :description="project?.description"
        />
        <div>
            <button class="button" data-btn-style="link-preview">
                <a target="_blank" :href="project?.link">
                    <span class="icon"
                        ><i class="fa-solid fa-up-right-from-square"></i
                    ></span>
                    <img :src="project?.image" />
                </a>
            </button>
        </div>
        <MadeWithComponent :made-with-list="project?.madeWith" />
    </div>
</template>

<script setup lang="ts">
import MadeWithComponent from "./Components/MadeWith.vue";
import TitleComponent from "./Components/Title.vue";

defineProps({
    project: Object,
});
</script>
