<template>
    <div>
        <div class="  md:flex block justify-between gap-5 py-10" id="about">

            <CardComponent padding="4rem" class="mb-5 md:mb-0 " bgColor="rgba(157, 210, 184, 0.46)" name="About us"
                title="Pharetra massa massa ultri."
                content="Ornare quam viverra orci sagittis eu volutpat odio facilisis. Purus non enim praesent elementum facilisis leo vel fringilla est. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue."
                text="Read our story" img="../public/Arrow 1.svg" float="float-right">
            </CardComponent>
            <CardComponent padding="4rem" bgColor="rgba(255, 225, 122, 0.23)" name="Our offer"
                title="Convallis a cras semper au."
                content="Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Purus non enim praesent elementum facilisis leo vel fringilla est. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis."
                text="What we offer" img="../public/Arrow 1.svg" float="float-right">
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
  
<style scoped></style>
  
  