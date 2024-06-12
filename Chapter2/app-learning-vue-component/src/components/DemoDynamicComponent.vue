<template>

    <div class="container">
        <div>
            <button class="btn btn-info" @click="handleselectedComponent('DangChieu')">
                Đang chiếu
            </button>
            <button class="btn btn-danger" @click="handleselectedComponent('SapChieu')">
                Sắp chiếu
            </button>
        </div>
        <!-- <div v-if="selectedComponent === 'DangChieu'">
            <DangChieu />
        </div>
        <div v-if="selectedComponent === 'SapChieu'">
            <SapChieu />
        </div> -->
        <div>
            <KeepAlive>
                <component :is="selectedComponent"> </component>
            </KeepAlive>
        </div>
    </div>
</template>
<script>
import SapChieu from "./SapChieu.vue";
import DangChieu from "./DangChieu.vue";
export default {
    data() {
        return {
            selectedComponent: "SapChieu"
        };
    },
    components: {
        SapChieu,
        DangChieu,
    },
    methods: {
        handleselectedComponent(comp) {
            this.selectedComponent = comp;
        },
    },
};
</script>

<style></style>