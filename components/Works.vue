<template>
  <div class="flex" v-for="work in works" :key="work.id">
    <div
      class="cursor-pointer w-full flex flex-col gap-4 items-center text-center"
    >
      <div>
        <NuxtLink :to="`/works/${work.link}`">
          <img :src="work.mainImage" alt="" />
        </NuxtLink>
      </div>
      <div class="flex flex-col gap-4">
        <h1 class="text-lg">{{ work.name }}</h1>
        <p class="text-sm font-extralight text-stone-400">
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
