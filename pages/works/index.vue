<template>
  <div
    class="container w-1/3 mx-auto text-center mt-32 px-3 text-black dark:text-white transition-all"
    v-if="loading"
  ></div>
  <main
    v-if="!loading"
    class="w-1/3 mx-auto my-32 px-3 text-black dark:text-white transition-all"
  >
    <h1
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
      class="indent-5 text-black dark:text-white text-xl"
    >
      Works
    </h1>
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
      class="flex flex-row gap-4 flex-wrap"
    >
      <Works :works="works" />
    </div>
  </main>
</template>

<script setup>
const loading = useLoading();

const nuxtApp = useNuxtApp();

nuxtApp.hook("page:loading:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:loading:end", () => {
  loading.value = false;
});

const { data: works } = await useFetch(
  "https://bb4599e9b6e5bd96.mokky.dev/works"
);

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
