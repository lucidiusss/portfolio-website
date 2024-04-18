<template>
  <div class="flex" v-for="work in works" :key="work.id">
    <NuxtLink :to="`/works/${work.link}`">
      <div
        class="cursor-pointer w-full flex flex-col gap-4 items-center text-center"
      >
        <div class="">
          <img class="" :src="`${work.image}`" alt="" />
        </div>
        <div class="flex flex-col gap-4">
          <h1 class="text-lg">{{ work.name }}</h1>
          <p class="text-sm font-extralight text-stone-400">
            {{ work.description }}
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const { data: works } = await useFetch(
  "https://bb4599e9b6e5bd96.mokky.dev/works"
);
</script>
