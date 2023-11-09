<template>
    <div>
        <div class="bg-image">
            <div class="home-container">
                <div class="flex justify-between items-center">
                    <div class="flex gap-4 ml-8">
                        <NuxtImg src="Logo.svg" sizes="5vw"></NuxtImg>
                        <NuxtImg src="CreativeLabs.svg" sizes="10vw"></NuxtImg>
                    </div>

                    <div class="md:hidden">
                        <font-awesome-icon @click="toggleMenu" class="cursor-pointer" icon="fa-solid fa-bars"
                            style="color: white; font-size: 35px; margin-right: 20px;" />
                    </div>

                    <nav class="hidden md:flex text-white items-center gap-1 mr-5 text-lg">
                        <ul class="md:flex block md:gap-x-6">
                            <li class="pt-3">Work</li>
                            <div class="dropdown">
                                <li class="dropbtn mb-3 pt-3">
                                    <div class="pb-3">
                                        What we do
                                    </div>
                                </li>
                                <div class="dropdown-content text-black">
                                    <div class="flex items-center">
                                        <div class="column ">
                                            <div class="flex">
                                                <a class="font-bold text-sm">Integer quis auctor elit</a>
                                                <NuxtImg src="./Arrow 10.svg" sizes="5vw"></NuxtImg>
                                            </div>
                                            <div class="flex">
                                                <a class="text-sm -mt-4">Arcu bibendum at varius vel.</a>
                                            </div>
                                        </div>
                                        <div class="column ">
                                            <div class="flex">
                                                <a class="font-bold text-sm">Integer quis auctor elit</a>
                                                <NuxtImg src="./Arrow 10.svg" sizes="5vw"></NuxtImg>
                                            </div>
                                            <div class="flex">
                                                <a class="text-sm -mt-4">Arcu bibendum at varius vel.</a>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="flex">
                                        <div class="column ">
                                            <div class="flex">
                                                <a class="font-bold text-sm">Integer quis auctor elit</a>
                                                <NuxtImg src="./Arrow 10.svg" sizes="5vw"></NuxtImg>
                                            </div>
                                            <div class="flex">
                                                <a class="text-sm -mt-4">Arcu bibendum at varius vel.</a>
                                            </div>
                                        </div>
                                        <div class="column ">
                                            <div class="flex">
                                                <a class="font-bold text-sm">Integer quis auctor elit</a>
                                                <NuxtImg src="./Arrow 10.svg" sizes="5vw"></NuxtImg>
                                            </div>
                                            <div class="flex">
                                                <a class="text-sm -mt-4">Arcu bibendum at varius vel.</a>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>
                            <li class="pt-3">Stories</li>
                            <li class="pt-3">
                                <NuxtLink to="#contactUs"> Contact </NuxtLink>
                            </li>
                            <li class="pt-3">Careers</li>
                            <li class="pt-3">
                                <NuxtLink to="#about">About us</NuxtLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div v-if="showDropdown" class="dropdown">

                    <p>Dropdown content goes here</p>
                </div>

                <div v-if="isMenuOpen" class="md:hidden">


                    <div class="menu-overlay">
                        <NuxtImg src="Logo.svg" sizes="5vw" id="menuLogo"></NuxtImg>
                        <nav class="menu-content">

                            <button @click="toggleMenu" class="close-button">
                                ✕
                            </button>

                            <ul class="text-white text-left gap-5 text-lg">
                                <li>Work</li>
                                <li>What we do</li>
                                <li>Stories</li>
                                <li>Contact</li>
                                <li>Careers</li>
                                <li>About us</li>
                            </ul>
                        </nav>
                    </div>

                </div>
                <div :class="{ 'hidden': isMenuOpen }" class="heading text-white md:w-9/12 w-72 ">
                    <h1 class="font-bold text-2xl sm:text-5xl title mb-5">
                        Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt.
                    </h1>
                    <p class="sub-title text-sm font-thin md:text-xl md:w-11/12">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis
                        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },

};
</script>
  
<style scoped>
.home-container {
    position: relative;
    min-height: 100dvh;
}

.bg-image {
    background-image: url("/HomePageImg.svg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    align-items: center;
}

.menu-content {
    text-align: left;
    margin-left: 10px;
}

#menuLogo {
    position: absolute;
    top: 2%;
    left: 2%;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
    font-size: 25px;
    cursor: pointer;
}

.heading {
    position: absolute;
    bottom: 5%;
    left: 5%;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 200px;

    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    right: 8%;
    filter: drop-shadow(0px 4px 4px #000000);
    padding: 20px;


}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    cursor: pointer;
}



.dropdown:hover .dropdown-content {
    margin-top: 0;
    border-radius: 20px;
    border: 1px solid black;
    display: block;
}

.dropdown-content {
    background-color: #FFFFFF;
    filter: brightness(80%);
}

.dropdown:hover .dropbtn {
    background-color: #79a491;

    border-radius: 25px;
}
</style>