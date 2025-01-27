<template>
    <form @submit="submit">
        <div class="form-input">
            <label>Name:</label>
            <input v-model="name" class="form-input" type="text" required />
        </div>
        <div class="form-input">
            <label>Email:</label>
            <input v-model="email" class="form-input" type="email" required />
        </div>
        <div class="form-input">
            <label class="form-input">Message:</label>
            <textarea v-model="message" maxlength="5000" required />
        </div>

        <div id="submit">
            <button :disabled="submitting" data-btn-type="success">
                Submit
            </button>
        </div>

        <div>
            <p v-if="submitting" :data-txt-type="submitStatus">
                Form Submitted!
            </p>
        </div>
    </form>
</template>

<style lang="scss" scoped>
#submit {
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    width: 100%;
    text-align: center;
}
</style>

<script setup lang="ts">
import { ref } from "vue";
import config from "../data/config";

const email = ref("");
const name = ref("");
const message = ref("");

const submitting = ref(false);
const submitStatus = ref("success");

async function submit() {
    const result = await fetch(config.apiBase + "/contact", {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            email: email.value,
            name: name.value,
            message: message.value,
        }),
    });

    if (result.status === 200) {
        submitStatus.value = "success";

        setTimeout(() => {
            window.location.reload();
        }, 1000);

        return;
    }

    submitStatus.value = "danger";
}
</script>
