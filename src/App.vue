<template>
  <div class="fixed min-h-screen w-full -z-1 dots"></div>
  <div class="h-screen w-full flex justify-center items-center py-5">
    <RouterView />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DotGothic16&family=Quicksand:wght@300..700&family=Rubik+Glitch&family=Rubik+Mono+One&family=Rubik:ital,wght@0,300..900;1,300..900&family=VT323&display=swap');

.rubik {
  font-family: "Rubik Mono One", monospace;
  font-weight: 400;
  font-style: normal;
}

.rubik-i {
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
}

.rubik-glitch {
  font-family: "Rubik Glitch", system-ui;
  font-weight: 400;
  font-style: normal;
}

.dotgothic16 {
  font-family: "DotGothic16", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.quicksand {
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}


.vt323 {
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
}


body {
  background-color: rgb(0, 0, 0);
}

.dots {
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}

p,
h1,
h2,
h3,
button {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #5bffc8
}

::-webkit-scrollbar-thumb:hover {
  background: #5bffc8;
}
</style>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>
