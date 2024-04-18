<template>
  <div v-for="work in works" :key="work.id">
    <NuxtLink :to="`${work.link}`">
      <div
        class="cursor-pointer flex flex-col gap-4 w-72 items-center text-center"
      >
        <div class="w-72">
          <img class="rounded-xl" :src="`${work.image}`" alt="" />
        </div>
        <div class="flex flex-col gap-4">
          <h1 class="text-lg">{{ work.name }}</h1>
          <p class="text-sm font-extralight text-stone-400">
            {{ work.description }}
          </p>
        </div>
      </div></NuxtLink
    >
  </div>
</template>

<script setup>
const works = [
  {
    id: 1,
    link: "/works/todo-app",
    name: "Todo App",
    image: "../../assets/images/todo-app.png",
    website: "https://vue-pet-todo-app.vercel.app/",
    stack: "Vue 3, Tailwind CSS, Supabase",
    description:
      "a 📝 todo app that allows you to take notes of your tasks, rename and delete them as well",
  },
  {
    id: 2,
    link: "/works/weather-app",
    name: "Weather App",
    image: "../../assets/images/weather-app.png",
    website: "https://vue-weather-app-one-murex.vercel.app/",
    stack: "Vue 3, SASS, Weather API",
    description:
      "a ☁️ weather app that allows you to check the weather in any city with wide information",
  },
  {
    id: 3,
    link: "/works/weather-app",
    name: "Weather App",
    image: "../../assets/images/weather-app.png",
    website: "https://vue-weather-app-one-murex.vercel.app/",
    stack: "Vue 3, SASS, Weather API",
    description:
      "this is basically the portfolio website you are on right now 🤓",
  },
];
</script>
