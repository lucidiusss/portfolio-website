<template>
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
    v-if="thisWork"
    class="mx-auto container w-1/3 mt-32"
  >
    <div>
      <div class="flex gap-1 items-center">
        <NuxtLink
          class="text-pink-500 hover:underline underline-offset-4 transition-all"
          to="/works"
        >
          Works
        </NuxtLink>
        <Icon
          color="white"
          size="12"
          name="material-symbols:arrow-forward-ios"
        />
        <h1 class="text-xl text-black dark:text-white font-bold">
          {{ thisWork.name }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup>
const { work } = useRoute().params;

useHead({
  title: work.name,
  meta: [
    {
      name: "description",
      content: work.description,
    },
  ],
});

//fetch the work
const url = `https://bb4599e9b6e5bd96.mokky.dev/works?link=` + work;
const { data: w } = await useFetch(url);
const thisWork = w.value[0];
</script>
