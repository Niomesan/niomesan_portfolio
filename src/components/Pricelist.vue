<template>
    <div
        class="w-[80%] h-[90%] bg-gradient-to-t to-[#3e0000] from-[#02085f] border-1 border-dashed border-[#5bffc8] rounded-3xl p-2 overflow-hidden">
        <div class="relative quicksand bg-black h-[100%] rounded-2xl flex flex-col justify-center items-center">
            <div class="relative rounded-2xl w-[100%] h-[100%] text-white">
                <div class="absolute w-[100%] h-[100%] z-2 bg-black rounded-2xl opacity-70"></div>
                <div style="background-image: url(/profile/sky.webp);"
                    class="w-[100%] h-[100%] z-1 rounded-2xl absolute overflow-auto"></div>
                <div class="z-3 w-[100%] h-[100%] relative p-5 overflow-auto">
                    <div class="relative flex flex-col xl:flex-row items-center mb-5 w-[100%] m-auto">
                        <div class="flex flex-col text-center text-white justify-center w-[100%]">
                            <div class="flex flex-row items-center justify-center gap-1 mt-20 md:mt-0 mb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="m17 17.4l-1.9 1.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l1.9-1.9l-1.9-1.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l1.9 1.9l1.9-1.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L18.4 16l1.9 1.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275zm-.65-9.225l3.55-3.55q.3-.3.7-.287t.7.312q.275.3.275.7t-.275.7l-4.225 4.25q-.3.3-.7.3t-.7-.3l-2.15-2.15q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275zM3 15h7q.425 0 .713.288T11 16t-.288.713T10 17H3q-.425 0-.712-.288T2 16t.288-.712T3 15m0-8h7q.425 0 .713.288T11 8t-.288.713T10 9H3q-.425 0-.712-.288T2 8t.288-.712T3 7" />
                                </svg>
                                <h1 class="text-2xl md:text-3xl text-center">Pricelist</h1>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-5 text-lg md:p-7">
                        <p class="text-center text-sm">All commission types include regular communication with me during
                            the
                            creation process, updates on the progress of the work, and the opportunity to request minor
                            changes in the early stages of development.</p>
                        <div>
                            <div>
                                <h2 class="text-2xl text-[#5bffc8]">Artwork</h2>
                                <div class="w-[100%] h-[1px] bg-white mb-3 mt-1"></div>
                                <p>"Sketch" and "Clean" styles refer to the style of the lineart.</p>
                            </div>
                            <div class="flex flex-col gap-5 text-lg lg:p-7">
                                <div
                                    class="flex flex-col 2xl:flex-row gap-10 my-3 justify-center text-center lg:text-left lg:justify-between">
                                    <div class="flex flex-col lg:flex-row gap-15 justify-center 2xl:justify-start">
                                        <div>
                                            <h3 class="text-xl text-[#5bffc8]">Sketch:</h3>
                                            <ul>
                                                <li class="lg:list-disc lg:ml-5">Headshot | 40€</li>
                                                <li class="lg:list-disc lg:ml-5">Halfbody | 50€</li>
                                                <li class="lg:list-disc lg:ml-5">Fullbody | 60€</li>
                                            </ul>
                                        </div>
                                        <img src="/sketchlineart.webp" width="300px"
                                            class="rounded-3xl md:m-auto xl:m-0" />
                                    </div>
                                    <div class="w-[1px] hidden xl:block bg-white"></div>
                                    <div class="w-[100%] h-[1px] xl:hidden bg-white"></div>
                                    <div class="flex flex-col lg:flex-row gap-15 justify-center 2xl:justify-start">
                                        <div>
                                            <h3 class="text-xl text-[#5bffc8]">Clean:</h3>
                                            <ul>
                                                <li class="lg:list-disc lg:ml-5">Headshot | 50€</li>
                                                <li class="lg:list-disc lg:ml-5">Halfbody | 60€</li>
                                                <li class="lg:list-disc lg:ml-5">Fullbody | 70€</li>
                                            </ul>
                                        </div>
                                        <img src="/cleanlineart.webp" width="300px"
                                            class="rounded-3xl md:m-auto xl:m-0" />
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-xl text-[#5bffc8]">CG Illustration</h3>
                                    <p>Price will be determined after discussion and assessment of the specific
                                        requirements.
                                        (Estimated cost: ~150€)</p>
                                </div>
                                <div>
                                    <h3 class="text-xl text-[#5bffc8]">"A Cup of Tea" Thank you tip</h3>
                                    <p>Invite me for tea, and I'll doodle your favorite character or OC on a digital
                                        napkin. ^-^ | 5€
                                    </p>
                                </div>
                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 my-3">
                                    <div>
                                        <h3 class="text-2xl text-[#5bffc8]">I will draw</h3>
                                        <ul>
                                            <li class="list-disc ml-5">Humanoid Characters</li>
                                            <li class="list-disc ml-5">Original Characters</li>
                                            <li class="list-disc ml-5">Fanart of Characters from anime, cartoons,
                                                movies, games,
                                                etc.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 class="text-2xl text-[#5bffc8]">I will <span class="text-red-500">not</span>
                                            draw
                                        </h3>
                                        <ul>
                                            <li class="list-disc ml-5">Mechanoid Characters</li>
                                            <li class="list-disc ml-5">Furry Characters</li>
                                            <li class="list-disc ml-5">Stolen Original Characters</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col gap-5">
                                <div>
                                    <h2 class="text-2xl text-[#5bffc8]">Website</h2>
                                    <div class="w-[100%] h-[1px] bg-white mt-1"></div>
                                </div>
                                <div class="flex flex-col gap-5 text-lg lg:p-7">
                                    <h3 class="text-xl text-[#5bffc8]">Personalized Portfolio Page with Ongoing Support:
                                    </h3>
                                    <ul>
                                        <li class="list-disc ml-5">Initial Price | 50€ - Includes 3 pages (Homepage + 2
                                            additional pages)</li>
                                        <li class="list-disc ml-5">Additional Pages | 5€ per page</li>
                                        <li class="list-disc ml-5">100% Client Side Rendered (CSR), no backend</li>
                                        <li class="list-disc ml-5">Responsive layout optimized for all devices</li>
                                        <li class="list-disc ml-5">Any kind of designs can be done!</li>
                                        <li class="list-disc ml-5">Free ongoing support for minor updates and bug fixes
                                            (e.g.,
                                            text updates, adding
                                            artwork,
                                            color changes)</li>
                                        <li class="list-disc ml-5">Major Updates | Price will be determined after
                                            discussion and
                                            assessment of the specific
                                            requirements. (Estimated cost: ~30€)</li>
                                    </ul>
                                    <div>
                                        <h3 class="text-xl text-[#5bffc8]">Frontend Web App for PC or Mobile:</h3>
                                        <p>Price will be determined after discussion based on complexity, deadline, and
                                            application
                                            size.
                                            (Estimated cost: ~200€)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>

<script setup lang="ts">
</script>