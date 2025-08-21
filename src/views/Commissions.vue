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
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M13.26 3C8.17 2.86 4 6.95 4 12H2.21c-.45 0-.67.54-.35.85l2.79 2.8c.2.2.51.2.71 0l2.79-2.8a.5.5 0 0 0-.36-.85H6c0-3.9 3.18-7.05 7.1-7c3.72.05 6.85 3.18 6.9 6.9c.05 3.91-3.1 7.1-7 7.1c-1.61 0-3.1-.55-4.28-1.48a.994.994 0 0 0-1.32.08c-.42.42-.39 1.13.08 1.49A8.86 8.86 0 0 0 13 21c5.05 0 9.14-4.17 9-9.26c-.13-4.69-4.05-8.61-8.74-8.74m-.51 5c-.41 0-.75.34-.75.75v3.68c0 .35.19.68.49.86l3.12 1.85c.36.21.82.09 1.03-.26c.21-.36.09-.82-.26-1.03l-2.88-1.71v-3.4c0-.4-.34-.74-.75-.74" />
                                </svg>
                                <h1 class="text-xl md:text-3xl">Past Commissions</h1>
                            </div>
                            <h2 class="mb-5 text-sm">The list of my previously done commissions.</h2>
                        </div>
                    </div>
                    <h2 class="text-2xl text-[#5bffc8] text-left mb-1">Artworks</h2>
                    <div class="w-[100%] h-[1px] bg-white"></div>
                    <div class="w-[100%] h-auto m-auto grid grid-cols-5 gap-4 overflow-auto p-3">
                        <div v-for="artwork, k of commArtworks" :key="k"
                            class="w-auto h-[100%] bg-[#ffffff27] hover:bg-[#009d696b] drop-shadow-[#02085f] drop-shadow-md transition m-auto flex flex-col justify-between items-start gap-3 p-5 rounded-3xl">
                            <img :src="artwork.image" width="300px" class="rounded-2xl" />
                            <div>
                                <h3 class="text-3xl text-[#5bffc8]">{{ artwork.name }} <span
                                        class="text-[15px] text-white">for {{
                                            artwork.commissioner }}</span></h3>
                                <p class="text-left text-xl">{{ artwork.date }}</p>
                            </div>
                        </div>
                    </div>
                    <h2 class="text-2xl text-[#5bffc8] text-left mb-1">Websites</h2>
                    <div class="w-[100%] h-[1px] bg-white"></div>
                    <p class="text-left mt-3">None so far, lol</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>

<script setup lang="ts">
const commArtworks = [
    {
        "name": "Ai Hoshino",
        "commissioner": "Sayykii",
        "date": "2025 April",
        "image": "/comms/0.webp"
    },
]
</script>