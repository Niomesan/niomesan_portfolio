<template>
    <div
        class="w-[80%] h-[90%] bg-gradient-to-t to-[#3e0000] from-[#02085f] border-1 border-dashed border-[#5bffc8] rounded-3xl p-2 overflow-hidden">
        <div class="relative quicksand bg-black h-[100%] rounded-2xl flex flex-col justify-center items-center">
            <div class="relative rounded-2xl w-[100%] h-[100%] text-white">
                <div class="absolute w-[100%] h-[100%] z-2 bg-black rounded-2xl opacity-50"></div>
                <div style="background-image: url(/profile/sky.webp);"
                    class="w-[100%] h-[100%] z-1 rounded-2xl absolute overflow-auto"></div>
                <div class="z-3 w-[100%] h-[100%] relative p-5 overflow-auto">
                    <div class="relative flex flex-col xl:flex-row items-center mb-5 w-[100%] m-auto">
                        <div class="xl:absolute flex justify-center xl:justify-start w-[100%] mb-8 xl:mb-0">
                            <nav class="xl:mb-7">
                                <RouterLink to="/"
                                    class="relative w-auto h-auto z-4 flex flex-col p-2 bg-gradient-to-b from-[#3e000091] to-[#00000bd5] drop-shadow-[#02085f] border-1 border-t-2 border-[#ffffff78] drop-shadow-xl hover:bg-[#009d696b] hover:to-[#0b000a78] hover:border-[#7affd3] text-3xl hover:cursor-pointer hover:scale-105 text-white rounded-xl transition overflow-hidden">
                                    <div
                                        class="absolute z-2 top-0 w-[100%] h-[20%] bg-[#76ffc18c] left-0 rounded-t-xl blur-xl">
                                    </div>
                                    <div
                                        class="absolute z-3 top-0 w-[100%] h-[3%] bg-[#ffffff] left-0 rounded-t-xl blur-sm">
                                    </div>
                                    <div class="flex flex-row items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M16 19L5 12l11-7z" />
                                        </svg>
                                        <p class="text-sm lg:text-xl quicksand">Back to Homepage</p>
                                    </div>
                                </RouterLink>
                            </nav>
                        </div>
                        <div class="flex flex-col text-center text-white justify-center w-[100%]">
                            <div class="flex flex-row items-center justify-center gap-1 mb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M17.5 12a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 17.5 9a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-3-4A1.5 1.5 0 0 1 13 6.5A1.5 1.5 0 0 1 14.5 5A1.5 1.5 0 0 1 16 6.5A1.5 1.5 0 0 1 14.5 8m-5 0A1.5 1.5 0 0 1 8 6.5A1.5 1.5 0 0 1 9.5 5A1.5 1.5 0 0 1 11 6.5A1.5 1.5 0 0 1 9.5 8m-3 4A1.5 1.5 0 0 1 5 10.5A1.5 1.5 0 0 1 6.5 9A1.5 1.5 0 0 1 8 10.5A1.5 1.5 0 0 1 6.5 12M12 3a9 9 0 0 0-9 9a9 9 0 0 0 9 9a1.5 1.5 0 0 0 1.5-1.5c0-.39-.15-.74-.39-1c-.23-.27-.38-.62-.38-1a1.5 1.5 0 0 1 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8" />
                                </svg>
                                <h1 class="text-3xl">Artworks</h1>
                            </div>
                            <h2 class="mb-5 text-sm">Variety of my visual works in one gallery to spectate.</h2>
                        </div>
                    </div>
                    <div class="w-[90%] h-auto m-auto columns-1 md:columns-2 lg:columns-4 gap-3 p-3">
                        <div>
                            <viewer :images>
                                <img v-for="image, k of images" :value="image" :key="k" :src="image" width="400px"
                                    class="object-cover rounded-xl mb-3 hover:scale-103 transition hover:cursor-zoom-in" />
                            </viewer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { ref } from 'vue';

const artworks = Array(12 + 1);

const images = Array(artworks.length).fill(0).map((_, i) => `/artworks/${i}.webp`);
</script>