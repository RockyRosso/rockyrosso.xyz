<template>
    <div v-if="madeWithList && madeWithList.length > 0">
        <h1>Made with...</h1>

        <div v-for="toolLink in madeWithList">
            <p>
                <a target="_blank" :href="toolLink.link">{{
                    toolLink.title
                }}</a>
                {{ toolLink.description }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    madeWithList: Array<any>,
});
</script>
