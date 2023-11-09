<template>
    <div class="md:grid block pt-5 items-center justify-center contactUsForm gap-x-8 " id="contactUs">
        <h2 class="font-black text-4xl col-span-2 text-center  md:text-left">Contact us</h2>
        <p class="col-span-2 w-8/12 text-center mx-auto md:mx-0 md:text-left">Do you want to be a part of this network and
            amazing journey?
            Contact us, and we will
            get back to you.</p>
        <div class="col-span-1 bg-neutral-100  p-6">
            <label for="Name"> Name </label>
            <input type="text" id="Name" class="bg-transparent border-none outline-none">
        </div>
        <div class="col-span-1 bg-neutral-100 p-6">
            <label for="Company"> Company </label>
            <input type="text" id="Company" class="bg-transparent border-none outline-none">
        </div>
        <div class="col-span-2 bg-neutral-100 p-6">
            <label for="E-mail"> E-mail </label>
            <input type="email" id="E-mail" class="bg-transparent border-none outline-none ">
        </div>
        <div class="col-span-2 bg-neutral-100 p-6 mt-">
            <label for="Message">Message</label>
            <textarea name="Msg" id="Message" class="col-span-2 w-full bg-transparent border-none outline-none"></textarea>
        </div>
        <button
            class="greenButton col-span-2 font-bold px-20 py-4 text-white  mx-auto block  md:ml-auto md:mx-0">Send</button>
    </div>
</template>

<script>
</script>

<style scoped>
.contactUsForm>* {
    margin-block: 1rem;
}

.contactUsForm>:last-child {
    margin-top: 2.5rem;
}

#Message {
    resize: none;
    overflow: hidden;
}

.greenButton {
    background-color: #58C08E;
    filter: drop-shadow(0px 4px 4px #000000);
    border: 1px solid black;

}
</style>