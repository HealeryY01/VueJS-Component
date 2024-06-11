<template>
    <div v-if="proItem" class="card text-left">
        <img class="card-img-top" :src="proItem.urlImage" alt="">
        <div class="card-body">
            <h4 class="card-title">{{ proItem.nameProduct }}</h4>
        </div>
        <button class="btn btn-info" @click="hanldeSelect(proItem)">
            select
        </button>
        <p>{{ multipleType }}</p>
        <p>{{ user }}</p>
    </div>
</template>

<script>
export default {
    methods: {
        hanldeSelect(proItem) {
            this.$emit("custom-handle-select", proItem);
        },
    },
    inject: [
        "user"
    ],
    props: {
        proItem: {
            type: Object,
            required: true,
        },
        multipleType: {
            type: [String, Number],
            required: false,
            default: "hello",
            validator(value) {
                if (value.length > 3) {
                    return true;
                } else {
                    return false;
                }
            },
        },
    },
};
</script>

<style></style>