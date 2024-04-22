<template>
  <div
    class="flex 2xl:w-full xl:w-full lg:w-full max-sm:w-full sm:w-2/3 md:w-1/3 mt-10 mx-auto flex-row"
    v-for="work in works"
    :key="work.id"
  >
    <div
      class="cursor-pointer w-full flex flex-col gap-4 items-center text-center"
    >
      <div>
        <NuxtLink :to="`/works/${work.link}`">
          <img :src="work.mainImage" alt="" />
        </NuxtLink>
      </div>
      <div class="flex flex-col gap-4">
        <h1 class="lg:text-lg md:text-md max-sm:text-sm">{{ work.name }}</h1>
        <p class="text-sm max-sm:text-xs font-extralight text-stone-400">
          {{ work.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  works: {
    type: Array,
    required: true,
  },
});
</script>
