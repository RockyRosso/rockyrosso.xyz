<template>
    <div>
        <h1 class="title">{{ title }}</h1>
        <div>
            <p data-txt-style="sub">{{ description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: String,
    description: String,
});
</script>
