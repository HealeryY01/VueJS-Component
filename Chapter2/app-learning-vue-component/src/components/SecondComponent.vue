<template>
    <h2> Second Component </h2>
    <p>{{ message }}</p>
    <LocalComponent/>
</template>

<script>
import LocalComponent from './LocalComponent.vue'
export default {
    data() {
        return {
            message: "Đây là componet thứ 2 mà tôi tạo ra",
        };
    },
    components: {
        LocalComponent,
    }
};
</script>

<style></style>