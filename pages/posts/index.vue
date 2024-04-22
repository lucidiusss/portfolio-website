<template>
  <main
    class="w-1/3 mx-auto container mt-32 px-3 text-black dark:text-white transition-all"
  >
    <h1
      v-motion
      :initial="{
        y: 50,
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
      Posts
    </h1>
    <div
      v-motion
      :initial="{
        y: 50,
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
      class="mt-10"
    >
      <h1 class="text-4xl font-bold text-center">there is no posts yet.</h1>
    </div>
    <div>{{ data }}</div>
  </main>
</template>

<script setup>
const { data } = await useFetch("/api/stats");
</script>
