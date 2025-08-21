<template>
  <div v-if="isTOSOpen" class="fixed z-99 top- left-0 w-full h-full bg-[#000000b9] flex justify-center items-center">
    <div class="relative w-[90%] md:w-[70%] h-[80%]">
      <TOS class="z-99 w-[100%] h-[100%]" />
      <div @click="isTOSOpen = false" class="absolute top-5 left-5 z-100">
        <div
          class="relative w-auto h-auto z-4 flex flex-col p-2 bg-gradient-to-b from-[#3e000091] to-[#00000bd5] drop-shadow-[#02085f] border-1 border-t-2 border-[#ffffff78] drop-shadow-xl hover:bg-[#009d696b] hover:to-[#0b000a78] hover:border-[#7affd3] text-3xl hover:cursor-pointer hover:scale-105 text-white rounded-xl transition overflow-hidden">
          <div class="absolute z-2 top-0 w-[100%] h-[20%] bg-[#76ffc18c] left-0 rounded-t-xl blur-xl"></div>
          <div class="absolute z-3 top-0 w-[100%] h-[3%] bg-[#ffffff] left-0 rounded-t-xl blur-sm"></div>
          <div class="flex flex-row items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M16 19L5 12l11-7z" />
            </svg>
            <p class="text-xl quicksand">Close</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isPricelistOpen"
    class="fixed z-99 top- left-0 w-full h-full bg-[#000000b9] flex justify-center items-center">
    <div class="relative w-[90%] md:w-[70%] h-[80%]">
      <Pricelist class="z-99 w-[100%] h-[100%]" />
      <div @click="isPricelistOpen = false" class="absolute top-5 left-5 z-100">
        <div
          class="relative w-auto h-auto z-4 flex flex-col p-2 bg-gradient-to-b from-[#3e000091] to-[#00000bd5] drop-shadow-[#02085f] border-1 border-t-2 border-[#ffffff78] drop-shadow-xl hover:bg-[#009d696b] hover:to-[#0b000a78] hover:border-[#7affd3] text-3xl hover:cursor-pointer hover:scale-105 text-white rounded-xl transition overflow-hidden">
          <div class="absolute z-2 top-0 w-[100%] h-[20%] bg-[#76ffc18c] left-0 rounded-t-xl blur-xl"></div>
          <div class="absolute z-3 top-0 w-[100%] h-[3%] bg-[#ffffff] left-0 rounded-t-xl blur-sm"></div>
          <div class="flex flex-row items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M16 19L5 12l11-7z" />
            </svg>
            <p class="text-xl quicksand">Close</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-[95%] 2xl:w-[80%] h-[90%] flex flex-col gap-5 lg:gap-0 lg:flex-row lg:justify-between">
    <div class="w-[100%] lg:w-[49%] flex flex-col justify-between">
      <div
        class="h-[70px] lg:h-[15%] w-[100%] rounded-3xl flex flex-col justify-between border-1 specialborder overflow-y-hidden py-2 text-[#5bffc8]">
        <div class="w-[100%] h-[100%] overflow-hidden flex items-center justify-center relative">
          <h1 v-if="nioGlitched"
            class="rubik-glitch absolute text-[20px] md:text-[32px] lg:text-[45px] text-center tracking-[18px] lg:tracking-[26px] ml-4 2xl:ml-0 lg:-mb-3 overflow-hidden">
            NIOMESAN</h1>
          <h1 v-if="!nioGlitched"
            class="rubik absolute text-[20px] md:text-[32px] lg:text-[45px] text-center tracking-[15px] lg:tracking-[20px] ml-4 2xl:ml-0 lg:-mb-3 overflow-hidden">
            N<span class="rubik-i">I</span>OMESAN
          </h1>
        </div>
        <div class="w-[100%] overflow-hidden">
          <p class="vt323 text-right whitespace-nowrap overflow-hidden">{{ subtext }}</p>
        </div>
      </div>
      <div
        class="lg:h-[83%] w-[100%] mt-5 bg-gradient-to-t to-[#3e0000] from-[#02085f] border-1 border-dashed border-[#5bffc8] rounded-3xl p-2">
        <div class="relative rounded-2xl w-[100%] h-[100%] text-white">
          <div class="absolute w-[100%] h-[100%] z-2 bg-black rounded-2xl opacity-50"></div>
          <div style="background-image: url(/profile/sky.webp);" class="w-[100%] h-[100%] z-1 rounded-2xl absolute">
          </div>
          <div class="z-3 relative md:pb-10 lg:pb-0">
            <p class="text-right p-2 vt323 mr-1 mb-1 md:mb-0 lg:-mb-5">> niri@profile $ _</p>
            <div class="flex flex-col lg:flex-row justify-center md:justify-between items-center pb-5 md:p-10">
              <div class="w-[80%] lg:w-[100%] 2xl:w-[80%] flex flex-col gap-5">
                <img src="/profile/pfp.webp" alt="Niomesan"
                  class="aspect-square w-[200px] md:w-[150px] lg:w-[120px] 2xl:w-[200px] rounded-[30%] m-auto lg:m-0" />
                <p class="quicksand text-center lg:text-left">A pen in hand - either for drawing or writing.<br>
                  I do artworks and websites. Otherwise, I usually read or play MMOs in my free time.
                  Cup of tea is always prepared on the top of my shelf. My favourite is herbal tea spiced with honey.
                </p>
                <div class="flex flex-col md:flex-row lg:flex-col 2xl:flex-row justify-between">
                  <div class="flex flex-col lg:flex-row 2xl:flex-col gap-3 mb-5 md:mb-0">
                    <div>
                      <div class="relative">
                        <h3 class="text-lg text-[#5bffc8]">Tools I use for drawing:</h3>
                        <h3 class="text-lg text-[#00ffaa] absolute top-0 blur-[3px] hover:blur-[10px] transition">Tools
                          I use for drawing:</h3>
                      </div>
                      <ul class="list-disc pl-5">
                        <li>Wacom Intuos S pre-2017</li>
                        <li>Paint tool Sai v1.0</li>
                      </ul>
                    </div>
                    <div>
                      <div class="relative">
                        <h3 class="text-lg text-[#5bffc8]">Tech I use // Currently learn:</h3>
                        <h3 class="text-lg text-[#00ffaa] absolute top-0 blur-[3px] hover:blur-[10px] transition">Tech I
                          use // Currently learn:</h3>
                      </div>
                      <ul class="list-disc pl-5">
                        <li>VueJS (Using bun & Vite)</li>
                        <li>Hono</li>
                        <li>PostgreSQL & Drizzle</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="flex flex-col lg:flex-row 2xl:flex-col gap-0 lg:gap-5 xl:gap-10 2xl:gap-0 items-center md:items-start 2xl:mr-10">
                    <div>
                      <p class="quicksand text-sm tracking-wide mb-2 text-[#ffffff9e] vt323">Also available at...</p>
                      <div class="flex flex-row gap-5">
                        <a href="https://x.com/niomesan" target="_blank"
                          class="bg-[#ffffff27] drop-shadow-[#02085f] drop-shadow-md hover:bg-[#aa89ff] aspect-square w-[50px] rounded-[50%] flex items-center justify-center cursor-pointer hover:scale-110 transition">
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16">
                            <path fill="currentColor"
                              d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z" />
                          </svg>
                        </a>
                        <!--
                          <a href="https://vgen.co/niomesan" target="_blank"
                            class="bg-[#ffffff27] drop-shadow-[#02085f] drop-shadow-md hover:bg-[#74c966] aspect-square w-[50px] rounded-[50%] flex items-center justify-center cursor-pointer hover:scale-110 transition">
                            <svg id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0, 0, 400,400">
                              <g id="svgg">
                                <path id="path0"
                                  d="M238.000 68.145 C 199.001 74.985,159.610 113.829,154.784 150.205 C 153.169 162.378,152.337 162.154,139.357 146.070 C 102.985 100.999,37.104 121.555,37.024 178.000 C 36.970 216.203,108.133 293.953,166.892 319.890 C 228.453 347.063,304.882 304.054,361.185 210.553 C 399.451 147.006,318.954 53.949,238.000 68.145 M279.414 104.082 C 300.932 114.628,326.000 149.029,326.000 168.012 C 326.000 191.910,263.830 260.310,226.437 277.553 C 187.972 295.289,128.154 260.777,76.419 191.000 C 61.007 170.214,64.289 152.000,83.446 152.000 C 93.080 152.000,95.241 153.473,106.496 167.713 C 156.806 231.364,194.545 255.208,219.304 238.985 L 224.118 235.831 209.859 220.116 C 192.709 201.215,189.172 195.646,184.833 180.722 C 169.065 126.480,227.877 78.825,279.414 104.082 M238.901 136.813 C 225.294 142.740,217.425 159.139,221.812 172.429 C 224.379 180.208,252.554 209.130,255.681 207.197 C 263.919 202.106,282.000 173.225,282.000 165.158 C 282.000 145.471,256.909 128.969,238.901 136.813 "
                                  stroke="none" fill="#ffffff" fill-rule="evenodd"></path>
                              </g>
                            </svg>
                          </a>
                        -->
                        <a href="https://github.com/Niomesan" target="_blank"
                          class="bg-[#ffffff27] drop-shadow-[#02085f] drop-shadow-md hover:bg-[#ffae6f] aspect-square w-[50px] rounded-[50%] flex items-center justify-center cursor-pointer hover:scale-110 transition">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <path fill="currentColor"
                              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                          </svg>
                        </a>
                        <a href="https://codeberg.org/Niomesan" target="_blank"
                          class="bg-[#ffffff27] drop-shadow-[#02085f] drop-shadow-md hover:bg-[#89c6ff] aspect-square w-[50px] rounded-[50%] flex items-center justify-center cursor-pointer hover:scale-110 transition">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <path fill="currentColor"
                              d="M11.999.747A11.974 11.974 0 0 0 0 12.75c0 2.254.635 4.465 1.833 6.376L11.837 6.19c.072-.092.251-.092.323 0l4.178 5.402h-2.992l.065.239h3.113l.882 1.138h-3.674l.103.374h3.86l.777 1.003h-4.358l.135.483h4.593l.695.894h-5.038l.165.589h5.326l.609.785h-5.717l.182.65h6.038l.562.727h-6.397l.183.65h6.717A12 12 0 0 0 24 12.75A11.977 11.977 0 0 0 11.999.747m3.654 19.104l.182.65h5.326c.173-.204.353-.433.513-.65zm.385 1.377l.18.65h3.563c.233-.198.485-.428.712-.65zm.383 1.377l.182.648h1.203c.356-.204.685-.412 1.042-.648z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div>
                      <p class="mt-3 text-sm">frenchthanks05@gmail.com</p>
                      <p class="text-sm">nijo@fhs.sh</p>
                      <p class="mt-8.5 lg:mt-0 xl:mt-8.5 whitespace-normal lg:whitespace-nowrap xl:whitespace-normal">
                        Commissions are <span class="text-red-500">closed</span>.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="absolute right-10 hidden 2xl:block">
                <p class="relative text-[80px] text-center text-[#9effd3] dotgothic16">ニ<br>
                  リ<br>
                  ー<br>
                  さ<br>
                  <span class="text-red-500">ん</span><br>
                </p>
                <p class="absolute top-0 text-[80px] text-center text-[#76ffc1] dotgothic16 blur-sm">ニ<br>
                  リ<br>
                  ー<br>
                  さ<br>
                  <span class="text-red-500">ん</span><br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[100%] lg:w-[49%] flex flex-row md:flex-col justify-between">
      <div
        class="w-[100%] lg:h-[50%] bg-gradient-to-t to-[#3e0000] from-[#02085f] border-2 border-dotted border-[#5bffc8] rounded-3xl p-2 mb-10 md:mb-0">
        <div class="relative w-[100%] h-[100%] rounded-2xl">
          <div class="absolute w-[100%] h-[100%] z-2 bg-black rounded-2xl opacity-50"></div>
          <div style="background-image: url(/profile/sky.webp); background-position: center;"
            class="w-[100%] h-[100%] z-1 rounded-2xl absolute"></div>
          <div class="z-3 relative flex flex-col gap-5 mb-3 md:mb-0 pb-3 md:pb-5 lg:pb-0">
            <h2 class="text-right text-white p-2 mr-1 vt323">> niri@works $ _</h2>
            <nav class="flex flex-col gap-5 md:px-3 lg:px-0 lg:gap-0 md:flex-row">
              <RouterLink to="/artworks"
                class="relative w-[90%] lg:w-[30%] mx-auto text-center md:text-left bg-gradient-to-b from-[#3e000091] to-[#00000bd5] drop-shadow-[#02085f] border-1 border-t-2 border-[#ffffff78] drop-shadow-xl hover:bg-[#009d696b] hover:to-[#0b000a78] hover:border-[#7affd3] text-3xl hover:cursor-pointer hover:scale-105 text-white rounded-xl p-2 transition overflow-hidden">
                <img src="/profile/icon1.webp" class="w-[50%] lg:w-[100%] m-auto" />
                <div class="absolute -z-1 top-0 w-[100%] h-[20%] bg-[#76ffc18c] left-0 rounded-t-xl blur-xl"></div>
                <div class="absolute top-0 w-[100%] h-[3%] bg-[#ffffff] left-0 rounded-t-xl blur-sm"></div>
                <p class="text-xl quicksand">Artworks</p>
              </RouterLink>
              <RouterLink to="/websites"
                class="relative w-[90%] lg:w-[30%] mx-auto text-center md:text-left bg-gradient-to-b from-[#3e000091] to-[#00000bd5] drop-shadow-[#02085f] border-1 border-t-2 border-[#ffffff78] drop-shadow-xl hover:bg-[#009d696b] hover:to-[#0b000a78] hover:border-[#7affd3] text-3xl hover:cursor-pointer hover:scale-105 text-white rounded-xl p-2 transition overflow-hidden">
                <img src="/profile/icon2.webp" class="w-[50%] lg:w-[100%] m-auto" />
                <div class="absolute -z-1 top-0 w-[100%] h-[20%] bg-[#76ffc18c] left-0 rounded-t-xl blur-xl"></div>
                <div class="absolute top-0 w-[100%] h-[3%] bg-[#ffffff] left-0 rounded-t-xl blur-sm"></div>
                <p class="text-xl quicksand">Websites</p>
              </RouterLink>
              <RouterLink to="/past_commissions"
                class="relative w-[90%] lg:w-[30%] mx-auto text-center md:text-left bg-gradient-to-b from-[#3e000091] to-[#00000bd5] drop-shadow-[#02085f] border-1 border-t-2 border-[#ffffff78] drop-shadow-xl hover:bg-[#009d696b] hover:to-[#0b000a78] hover:border-[#7affd3] text-3xl hover:cursor-pointer hover:scale-105 text-white rounded-xl p-2 transition overflow-hidden">
                <img src="/profile/icon3.webp" class="w-[50%] lg:w-[100%] m-auto" />
                <div class="absolute -z-1 top-0 w-[100%] h-[20%] bg-[#76ffc18c] left-0 rounded-t-xl blur-xl"></div>
                <div class="absolute top-0 w-[100%] h-[3%] bg-[#ffffff] left-0 rounded-t-xl blur-sm"></div>
                <p class="text-xl quicksand">Past Commissions</p>
              </RouterLink>
            </nav>
            <div
              class="flex flex-col md:flex-row justify-center md:justify-start w-[90%] md:w-[60%] lg:w-[90%] gap-5 m-auto mb-2 md:mb-0 md:m-0 md:ml-5">
              <button @click="isPricelistOpen = true"
                class="bg-[#ffffff27] hover:bg-[#009d696b] drop-shadow-[#02085f] drop-shadow-md w-auto p-1 px-3 text-lg text-white rounded-xl hover:cursor-pointer hover:scale-105 transition">Pricelist</button>
              <button @click="isTOSOpen = true"
                class="bg-[#ffffff27] hover:bg-[#009d696b] drop-shadow-[#02085f] drop-shadow-md w-auto p-1 px-3 text-lg text-white rounded-xl hover:cursor-pointer hover:scale-105 transition">Terms
                of Services</button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-[100%] h-[48%] hidden md:flex flex-row overflow-hidden justify-center items-center gap-4 lg:gap-1 p-5">
        <div v-for="artwork, k in artworks"
          class="lg:opacity-70 hover:opacity-100 w-[24%] h-full hover:w-[80%] -skew-x-5 overflow-hidden transition-all duration-500 rounded-3xl hover:border-2 hover:border-solid hover:border-[#ffffff] drop-shadow-black drop-shadow-sm hover:drop-shadow-lg hover:drop-shadow-[#02085f]"
          style="mask-image: inherit;">
          <img :src="artwork" :value="artwork" :key="k"
            class="w-[100%] h-[100%] object-cover skew-x-5 scale-130 hover:scale-110 transition duration-1000" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { RouterLink } from 'vue-router';
import TOS from '../components/TOS.vue';
import Pricelist from '../components/Pricelist.vue';

// ToS / Pricelist toggle
const isTOSOpen = ref(false);
const isPricelistOpen = ref(false);

// Glitched name on top.
const nioGlitched = ref(false);

function glitch() {
  if (!nioGlitched.value) {
    setTimeout(() => {
      nioGlitched.value = true
    }, 3000);
  };
}
glitch();

watch(nioGlitched, (newValue) => {
  if (newValue) {
    if (nioGlitched.value) {
      setTimeout(() => {
        nioGlitched.value = false
        glitch();
      }, 200);
    }
  }
});

// Subtext moving on top.
const subtext = ref('///////////////////////////////////////////////////////////////////// do cats like carrots? ₍^. .^₎⟆////////////////////////////////');

function moveSubtext() {
  setInterval(() => {
    subtext.value = subtext.value[subtext.value.length - 1] + subtext.value.slice(0, -1);
  }, 100);
}
moveSubtext();

// Artworks shown on main page.
const artworks = [
  '/profile/1.webp',
  '/profile/2.webp',
  '/profile/3.webp',
  '/profile/4.webp',
];
</script>
