<template>
    <nav class="flex gap project-options">
        <a class="button" href="/"
            ><span><i class="fa-solid fa-angle-left"></i></span
        ></a>
        <button
            @click="projectTab = 'programming'"
            data-project-tab="programming"
        >
            Programming
        </button>
        <button
            @click="
                projectTab = 'videos';
                console.log('hisdg');
            "
            data-project-tab="videos"
        >
            Videos
        </button>
        <button @click="projectTab = 'logos'" data-project-tab="logos">
            Logos
        </button>
    </nav>

    <section>
        <Programming
            :web-projects="p_projects"
            v-if="projectTab === 'programming'"
        />
        <Videos :web-projects="v_projects" v-if="projectTab === 'videos'" />
        <Logos :web-projects="l_projects" v-if="projectTab === 'logos'" />
    </section>
</template>

<style src="../assets/styles/components/projects.scss" />

<script lang="ts" setup>
import { ref } from "vue";

import Programming from "./Projects/Programming.vue";
import Videos from "./Projects/Videos.vue";
import Logos from "./Projects/Logos.vue";

import { projects as p_projects } from "../data/projects/programming";
import { projects as v_projects } from "../data/projects/video";
import { projects as l_projects } from "../data/projects/logos";

const projectTab = ref("programming");
</script>
