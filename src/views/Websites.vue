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
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M10.218 3.216a.75.75 0 0 0-1.436-.431l-3 10a.75.75 0 0 0 1.436.43zM4.53 4.97a.75.75 0 0 1 0 1.06L2.56 8l1.97 1.97a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0m6.94 6.06a.75.75 0 0 1 0-1.06L13.44 8l-1.97-1.97a.75.75 0 0 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0"
                                        clip-rule="evenodd" />
                                </svg>
                                <h1 class="text-3xl">Websites</h1>
                            </div>
                            <h2 class="mb-5 text-sm">Variety of websites and projects either for myself or for others by
                                personal interest.</h2>
                        </div>
                    </div>
                    <div
                        class="w-[90%] h-auto m-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 overflow-auto p-3">
                        <div :id="project.css_id" v-for="project in projects" :key="project.id"
                            class="relative w-full h-auto rounded-xl flex flex-col justify-between items-center p-5">
                            <div>
                                <h1 :id="project.dev?.title_font" :style="{ color: project.dev?.title_color }"
                                    class="text-2xl font-bold mb-3">{{
                                        project.name }}</h1>
                                <p :id="project.dev?.text_font" :style="{ color: project.dev?.text_color }"
                                    style="text-shadow:none" class="text-sm tracking-wider">{{
                                        project.description }}</p>
                            </div>
                            <div class="flex flex-col gap-3 md:gap-0 md:flex-row justify-between w-full mt-5">
                                <button
                                    :style="{ backgroundColor: project.dev?.button_background, border: project.dev?.button_border, display: project.dev?.button_display }"
                                    class="px-2 py-0.5 text-sm lg:text-md rounded-2xl hover:scale-110 transition"><a
                                        :href="project.website_url">Website</a></button>
                                <button
                                    :style="{ backgroundColor: project.dev?.button_background, border: project.dev?.button_border, display: project.dev?.button_display }"
                                    class="px-2 py-0.5 text-sm lg:text-md rounded-2xl hover:scale-110 transition"><a
                                        :href="project.source_code">Source
                                        code</a></button>
                            </div>
                        </div>
                    </div>
                    <p class="text-center">And more to come in the future!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Margarine&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Press+Start+2P&display=swap');
@import url('https://fonts.cdnfonts.com/css/merge-one');

@font-face {
    font-family: Constantia;
    src: url("../public/fonts/Constantia.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: brandon-grotesque;
    src: url('../public/fonts/Brandon_Grotesque.otf');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: Inter;
    src: url('../public/fonts/Inter.ttf');
    font-weight: 300;
    font-style: normal;
}

#margarine {
    font-family: "Margarine", sans-serif;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 3px;
}

#jp {
    font-family: "Noto Sans JP", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
}


#constantia {
    font-family: Constantia, sans-serif;
}

#brandon-grotesque {
    font-family: brandon-grotesque, sans-serif;
}

#inter {
    font-family: Inter, sans-serif;
}

#merge-one {
    font-family: 'Merge One', sans-serif;
    font-weight: 400;
    font-style: normal;
}

#jost {
    font-family: 'Jost', serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
}

#press-start {
    font-family: 'Press Start 2P', serif;
    font-weight: 400;
    font-style: normal;
}


#sakupon {
    background-color: #ffcd7d;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ffefca' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    border: #FFDB9C 3px solid;
    color: #ffffff;
    text-shadow: -2px -2px 0 #ffffff, 2px -2px 0 #ffffff, -2px 2px 0 #ffffff, 2px 2px 0 #ffffff;
}

#gwrevival {
    background: url("/websites/gwrevival/gw_bg.webp") no-repeat center center;
    background-size: cover;
    border: #ffffff 1px solid;
    color: #ffffff;
    text-shadow: -2px -2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000, 2px 2px 0 #000000;
    font-family: Constantia, sans-serif;
}

#tkalk {
    background-color: #2f2f2f;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23454545' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
    border: #454545 2px solid;
    color: #ffffff;
    font-family: jost, serif;
}

#hanakobestgirl {
    background-color: #f5f2f6;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23c476e8' fill-opacity='0.14'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    border: #aaa 5px solid;
    color: black;
    font-family: brandon-grotesque, sans-serif;
}
</style>

<script setup lang="ts">
const projects = [
    {
        "id": 0,
        "name": "ようこそ！",
        "description": "A small website simulating Sakusakupie's gacha minigame on Twitch.",
        "website_url": "https://sakusakugacha.vercel.app",
        "source_code": "https://github.com/Niomesan/sakusakugacha",
        "css_id": "sakupon",
        "dev": {
            "title_color": "#ff9500",
            "title_font": "jp",
            "text_font": "margarine",
            "text_color": "#000000",
            "button_background": "oklch(.666 .179 58.318)",
            "button_border": "oklch(.769 .188 70.08) 2px solid",
            "button_text_color": "#ffffff",
            "button_hover_background": "oklch(.527 .154 150.069)",
            "button_hover_border": "oklch(.723 .219 149.579) 5px solid",
        }
    },
    {
        "id": 1,
        "name": "GWRevival",
        "description": "Website for GWRevival Community.",
        "website_url": "https://gwrevival.vercel.app",
        "source_code": "https://github.com/Niomesan/gwrevival-site",
        "css_id": "gwrevival",
        "dev": {
            "title_color": "#dadada",
            "title_font": "constantia",
            "text_font": "constantia",
            "text_color": "#ffffff",
            "button_background": "#1f3046",
            "button_border": "oklch(87.2% .01 258.338) 2px solid",
            "button_text_color": "#ffffff",
            "button_hover_background": "oklch(.527 .154 150.069)",
            "button_hover_border": "oklch(.723 .219 149.579) 5px solid",
        }
    },
    {
        "id": 3,
        "name": "Tkalk",
        "description": "A Hungarian web-based mobile application for calcuating the weight of certain metallic valves.",
        "website_url": "",
        "source_code": "",
        "css_id": "tkalk",
        "dev": {
            "title_color": "#d1a870",
            "title_highlight": "-2px -2px 0 #ffffff, 2px -2px 0 #ffffff, -2px 2px 0 #ffffff, 2px 2px 0 #ffffff;",
            "title_font": "press-start",
            "text_font": "merge-one",
            "text_color": "#ffffff",
            "button_background": "#719ad0",
            "button_border": "#719ad0 3px solid",
            "button_text_color": "#ffffff",
            "button_hover_background": "oklch(.527 .154 150.069)",
            "button_hover_border": "oklch(.723 .219 149.579) 5px solid",
            "button_display": "none",
        }
    },
    {
        "id": 4,
        "name": "Hanako Is Best Girl",
        "description": 'An archival project dedicated to preserving and hosting the "Hanako Is Best Girl" website.',
        "website_url": "https://hanakoisbestgirl.moe",
        "source_code": "https://codeberg.org/fhs/hanako-site",
        "css_id": "hanakobestgirl",
        "dev": {
            "title_color": "#000000",
            "title_font": "brandon-grotesque",
            "text_font": "inter",
            "text_color": "#666",
            "button_background": "#c476e8",
            "button_border": "#c476e8 2px solid",
            "button_text_color": "#ffffff",
            "button_hover_background": "oklch(.527 .154 150.069)",
            "button_hover_border": "oklch(.723 .219 149.579) 5px solid",
        }
    },
]
</script>