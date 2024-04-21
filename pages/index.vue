<template>
  <div
    class="container w-1/3 mx-auto text-center mt-32 px-3 text-black dark:text-white transition-all"
    v-if="loading"
  >
    <h1 v-motion-slide-top class=""></h1>
  </div>
  <main
    v-if="!loading"
    class="container w-1/3 mx-auto mt-32 px-3 text-black dark:text-white transition-all"
  >
    <div
      v-motion
      :initial="{
        y: 200,
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
      class="flex"
    >
      <h1
        class="rounded-xl shadow-lg text-center transition-all dark:bg-[#313134] bg-[#f5f0e8] p-5 mx-auto"
      >
        Hello, I`m a junior frontend developer based in Saint-Petersburg,
        Russia!
      </h1>
    </div>
    <div
      v-motion
      :initial="{
        y: 200,
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
      class="mt-10 flex items-center justify-between gap-6"
    >
      <div class="flex flex-col gap-1">
        <h1 class="text-4xl font-bold">Nikita Isaev</h1>
        <h2 class="text-md dark:text-stone-400 text-stone-500">
          Junior Frontend Developer / Streamer
        </h2>
      </div>
      <div class="w-24 h-24 flex">
        <img
          class="rounded-full border-collapse border-2 border-gray-600 dark:border-gray-300"
          src="/avatar.jpg"
          alt=""
        />
      </div>
    </div>
    <Articles />
  </main>
</template>

<script setup lang="ts">
const loading = useLoading();

const nuxtApp = useNuxtApp();

nuxtApp.hook("page:loading:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:loading:end", () => {
  loading.value = false;
});

useHead({
  title: "Nikita Isaev",
  meta: [
    {
      name: "description",
      content: "Nikita Isaev - Junior Frontend Developer / Streamer",
    },
  ],
});
</script>
