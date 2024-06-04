<template>
  <div
    class="w-2-3 mx-auto text-center mt-20 px-3 text-black dark:text-white custom-transition"
    v-if="loading"
  ></div>
  <main
    v-if="!loading"
    class="2xl:w-1/3 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full max-sm:w-full mx-auto mt-20 p-2 text-black dark:text-white custom-transition"
  >
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
      class="flex"
    >
      <h1
        class="rounded-xl shadow-lg text-center custom-transition dark:bg-[#313134] bg-[#f5f0e8] p-5 mx-auto max-sm:w-full max-sm:text-sm"
      >
        Hi, I'm a junior frontend developer based in Saint-Petersburg, Russia!
      </h1>
    </div>
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
      class="mt-10 flex items-center mx-auto w-full justify-between gap-6"
    >
      <div class="flex flex-col gap-1 text-center max-sm:w-3/4 w-1/2">
        <h1 class="text-4xl font-bold max-sm:text-lg">Nikita Isaev</h1>
        <h2 class="text-md max-sm:text-xs dark:text-stone-400 text-stone-500">
          Junior Frontend Developer / Streamer
        </h2>
      </div>
      <div class="flex items-center justify-center max-sm:w-1/4 w-1/2">
        <NuxtImg
          preload
          class="rounded-full object-cover max-sm:w-16 max-sm:h-16 w-32 h-32 border-2 border-gray-600 dark:border-gray-300"
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
