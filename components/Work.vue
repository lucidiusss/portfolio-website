<template>
  <div class="indent-5 text-black dark:text-white my-12 w-full">
    <p class="max-sm:text-sm text-center">
      {{ props.work.description }}
    </p>
    <div class="flex flex-col gap-1 ml-5 mt-5">
      <div class="flex gap-2 max-sm:gap-1 items-center">
        <div>
          <span
            class="uppercase p-1 dark:text-[#9ae6b4] dark:bg-[#9ae6b4]/10 text-[#22543D] bg-[#C6F6D5] text-xs rounded"
            >website</span
          >
        </div>
        <NuxtLink
          class="hover:underline dark:text-pink-500 text-[#3d7aed] max-sm:text-xs underline-offset-4"
          :to="props.work.website"
          >{{ props.work.website }}</NuxtLink
        >
        <Icon
          class="dark:text-pink-500 text-[#3d7aed] max-sm:w-6 max-sm:h-6"
          name="iconamoon:link-external"
        />
      </div>
      <div class="flex gap-2 items-center">
        <div>
          <span
            class="uppercase p-1 dark:text-[#9ae6b4] dark:bg-[#9ae6b4]/10 text-[#22543D] bg-[#C6F6D5] text-xs rounded"
            >platform</span
          >
        </div>
        <p class="max-sm:text-xs">{{ props.work.platform }}</p>
      </div>
      <div class="flex gap-2 items-center">
        <div>
          <span
            class="uppercase p-1 dark:text-[#9ae6b4] dark:bg-[#9ae6b4]/10 text-[#22543D] bg-[#C6F6D5] text-xs rounded"
            >stack</span
          >
        </div>
        <p class="max-sm:text-xs items-center">{{ props.work.stack }}</p>
      </div>
    </div>
    <div class="w-full flex items-center justify-center">
      <div class="w-full flex items-center flex-col gap-4">
        <div>
          <NuxtImg
            preload
            class="max-sm:w-62"
            :src="`/${props.work.link}1.png`"
          />
        </div>
        <div>
          <NuxtImg
            preload
            class="max-sm:w-62"
            :src="`/${props.work.link}1.png`"
          />
        </div>
        <div>
          <NuxtImg
            preload
            class="max-sm:w-62"
            :src="`/${props.work.link}1.png`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  currentWork: {
    type: String,
    required: true,
  },
  work: {
    type: Object,
    required: true,
  },
});

useHead({
  title: `${props.work.name} | Nikita Isaev`,
});
</script>
