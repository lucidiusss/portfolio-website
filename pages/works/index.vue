<template>
  <div
    class="w-1/3 mx-auto text-center mt-20 px-3 text-black dark:text-white custom-transition"
    v-if="loading"
  ></div>
  <main
    v-if="!loading"
    class="2xl:w-1/3 xl:w-1/2 lg:w-1/2 md:w-full xs:w-full sm:w-full w-1/3 mx-auto my-20 p-2 text-black dark:text-white custom-transition"
  >
    <h1
      v-motion
      :initial="{
        y: 100,
        opacity: 0,
      }"
      :enter="{
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 25,
          mass: 1,
        },
      }"
      class="indent-5 text-black dark:text-white text-xl"
    >
      Works
    </h1>
    <div
      v-motion
      :initial="{
        y: 100,
        opacity: 0,
      }"
      :enter="{
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 25,
          mass: 1,
        },
      }"
      class="flex flex-row gap-4 flex-wrap"
    >
      <Works :works="works" />
    </div>
  </main>
</template>

<script setup>
const loading = useLoading();

const nuxtApp = useNuxtApp();

const works = [
  {
    id: 1,
    link: "geek-blog",
    name: "Geek Blog",
    mainImage: "/geek-blog1.png",
    images: {
      "geek-blog1": "/geek-blog1.png",
      "geek-blog2": "/geek-blog2.png",
      "geek-blog3": "/geek-blog3.png",
    },
    website: "https://geek-blog-five.vercel.app/",
    stack: "Nuxt, Pinia, Tailwind CSS, Tiptap Editor",
    platform: "Windows/macOS/Linux/iOS/Android",
    date: "2024",
    description:
      "This is  a blog website. Simply post and share thoughts with others!",
  },
  {
    id: 2,
    link: "weather-app",
    name: "WeatherApp",
    mainImage: "/weather-app1.png",
    images: {
      "weather-app1": "/weather-app1.png",
      "weather-app2": "/weather-app2.png",
      "weather-app3": "/weather-app3.png",
    },
    website: "https://vue-weather-app-one-murex.vercel.app/",
    stack: "Vue 3, SASS, Weather API",
    platform: "Windows/macOS/Linux/iOS/Android",
    date: "2024",
    description:
      "A ☁️ weather app that allows you to check the weather in any city with comprehensive information.",
  },
  {
    id: 3,
    link: "portfolio-website",
    name: "Portfolio Website",
    mainImage: "/portfolio-website1.png",
    images: {
      "portfolio-website1": "/portfolio-website1.png",
      "portfolio-website2": "/portfolio-website2.png",
    },
    website: "https://portfolio-website-three-sepia.vercel.app/",
    stack: "Nuxt 3, Tailwind CSS, Three.js, Vueuse Motion",
    platform: "Windows/macOS/Linux/iOS/Android",
    date: "2024",
    description:
      "This is basically the portfolio website you are on right now 🤓.",
  },
  {
    id: 4,
    link: "todo-app",
    name: "TodoApp",
    mainImage: "/todo-app1.png",
    images: {
      "todo-app1": "/todo-app1.png",
      "todo-app2": "/todo-app2.png",
      "todo-app3": "/todo-app3.png",
    },
    website: "https://vue-pet-todo-app.vercel.app/",
    stack: "Vue 3, Tailwind CSS, Supabase",
    platform: "Windows/macOS/Linux/iOS/Android",
    date: "2024",
    description:
      "A 📝 todo app that allows you to take notes of your tasks, rename and delete them as well.",
  },
];

nuxtApp.hook("page:loading:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:loading:end", () => {
  loading.value = false;
});

useHead({
  title: "Works | Nikita Isaev",
  meta: [
    {
      name: "description",
      content: "Nikita Isaev - Works",
    },
  ],
});
</script>
