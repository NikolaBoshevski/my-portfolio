<template>
    <div class="contactBgImg flex items-end ">
        <div class="md:w-8/12 w-100 ">

            <CardComponent padding="5rem" class="text-white mobile-padding " name="Contact us"
                title="Euismod elementum nisi quis eleifend quam proin sagittis."
                content="Senectus et netus et malesuada fames. Sed augue lacus viverra vitae congue eu consequat. Cum sociis natoque penatibus et magnis dis parturient montes. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Enim eu turpis egestas pretium aenean pharetra."
                bgColor="unset" text="Contact us" img="../public/Arrow 4.svg" float="float-left">
            </CardComponent>
        </div>
    </div>
</template>

<script>

import CardComponent from '../components/CardComponent.vue';

export default {
    components: {
        CardComponent,
    },
};
</script>

<style scoped>
.contactBgImg {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.5)), url("/ContactUs.svg");
    min-height: 70dvh;
    background-position: center;


}
</style>