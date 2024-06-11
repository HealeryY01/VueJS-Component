<template>
    <section class="container">
        <div class="row">
            <div v-for="(productItem, index) in proList" class="col-sm-3" :key="index">
                <ProductItem :proItem='productItem' :multipleType="'Nguyễn Thế Hiệu'"
                    @custom-handle-select="hanldeSeclect" />
            </div>
        </div>
    </section>
</template>

<script>
import ProductItem from './ProductItem.vue';
export default {
    methods: {
        hanldeSeclect(proItem) {
            console.log("word", proItem);
        },
    },
    data() {
        return {
            proList: [{
                urlImage: 'https://salt.tikicdn.com/cache/280x280/ts/product/0b/1a/98/b36c67698cc86e194d17ef9e0c6783a5.jpg.webp',
                nameProduct: 'MacBook Air M1 13',
            },
            {
                urlImage: "https://salt.tikicdn.com/cache/750x750/ts/product/80/64/a3/63c650601239e7c9686dc52da7ef6b41.png.webp",
                nameProduct: "Dell Latitude",
            },
            {
                urlImage: "https://salt.tikicdn.com/cache/750x750/ts/product/e0/be/a2/2007a3fdbdc48892339afd62352c9782.jpg.webp",
                nameProduct: "Dell Latitude 3420 ",
            },
            {
                urlImage: 'https://salt.tikicdn.com/cache/280x280/ts/product/0b/1a/98/b36c67698cc86e194d17ef9e0c6783a5.jpg.webp',
                nameProduct: 'MacBook Air 2022',
            },
            ],
        };
    },
    components: {
        ProductItem,
    }
}
</script>