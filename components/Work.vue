<template>
  <div v-if="!loading" class="text-black dark:text-white mt-5">
    <p class="indent-5">{{ thisWork.description }}</p>
    <div class="flex flex-col gap-1 ml-5 mt-5">
      <div class="flex gap-2">
        <div>
          <span
            class="uppercase p-1 text-[#9ae6b4] bg-[#9ae6b4]/15 text-xs rounded"
            >website</span
          >
        </div>
        <NuxtLink
          class="hover:underline text-pink-500 underline-offset-4"
          :to="thisWork.website"
          >{{ thisWork.website }}</NuxtLink
        >
        <Icon class="text-pink-500" name="iconamoon:link-external" />
      </div>
      <div class="flex gap-2">
        <div>
          <span
            class="uppercase p-1 text-[#9ae6b4] bg-[#9ae6b4]/15 text-xs rounded"
            >platform</span
          >
        </div>
        <p>{{ thisWork.platform }}</p>
      </div>
      <div class="flex gap-2">
        <div>
          <span
            class="uppercase p-1 text-[#9ae6b4] bg-[#9ae6b4]/15 text-xs rounded"
            >stack</span
          >
        </div>
        <p>{{ thisWork.stack }}</p>
      </div>
    </div>
    <div class="w-full">
      <div class="w-full">
        <img class="w-full" :src="thisWork.image" alt="" />
      </div>
    </div>
  </div>
  <div v-else>
    <NuxtLoadingIndicator />
  </div>
</template>

<script setup>
const thisWork = useThisWork();
const loading = useLoading();
</script>
