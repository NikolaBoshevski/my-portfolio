<template>
    <div class=" md:flex block justify-around items-start gap-3 pt-10 ">

        <div class="column basis-1/2">


            <NuxtImg src="./JoinImg.svg" loading="lazy" sizes="50vw" class="mb-5 ImgPadding"></NuxtImg>
        </div>

        <div class="column basis-1/2">


            <CardComponent class="w-100 mobile-padding " padding="2.6rem" bgColor="#F5F5F5" name="Join Our Team"
                title="Tincidunt tortor aliquam."
                content="Quam nulla porttitor massa id neque aliquam. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Nunc lobortis mattis aliquam faucibus purus in. Facilisis volutpat est velit egestas dui id. Mollis aliquam ut porttitor leo a diam sollicitudin tempor."
                content2="  Netus et malesuada fames ac. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Dictum sit amet justo donec enim diam vulputate. Condimentum id venenatis a condimentum vitae."
                content3=" Urna neque viverra justo nec ultrices dui sapien. Faucibus nisl tincidunt eget nullam. Maecenas ultricies mi eget mauris pharetra. "
                text="We are Hiring" img="/Arrow 1.svg" float="float-right">
            </CardComponent>
        </div>


    </div>
</template>

<script>

</script>

<style >
@media(max-width: 426px) {
    .mobile-padding {
        padding: 4rem !important;
    }
}

.ImgPadding {
    padding: -400px;
}
</style>