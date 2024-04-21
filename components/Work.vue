<template>
  <div class="text-black dark:text-white my-12">
    <p class="indent-5">{{ props.work.description }}</p>
    <div class="flex flex-col gap-1 ml-5 mt-5">
      <div class="flex gap-2 items-center">
        <div>
          <span
            class="uppercase p-1 text-[#9ae6b4] bg-[#9ae6b4]/15 text-xs rounded"
            >website</span
          >
        </div>
        <NuxtLink
          class="hover:underline text-pink-500 underline-offset-4"
          :to="props.work.website"
          >{{ props.work.website }}</NuxtLink
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
        <p>{{ props.work.platform }}</p>
      </div>
      <div class="flex gap-2">
        <div>
          <span
            class="uppercase p-1 text-[#9ae6b4] bg-[#9ae6b4]/15 text-xs rounded"
            >stack</span
          >
        </div>
        <p>{{ props.work.stack }}</p>
      </div>
    </div>
    <div class="w-full flex items-center justify-center">
      <div class="w-full flex items-center flex-col gap-4">
        <div>
          <NuxtImg
            class="max-w-[500px]"
            :src="`/${props.work.link}1.png`"
            alt=""
            @load="isLoading"
          />
          <div v-if="isLoading">loading...</div>
        </div>
        <div>
          <NuxtImg
            class="max-w-[500px]"
            :src="`/${props.work.link}1.png`"
            alt=""
            @load="isLoading"
          />
          <div v-if="isLoading">loading...</div>
        </div>
        <div>
          <NuxtImg
            class="max-w-[500px]"
            :src="`/${props.work.link}1.png`"
            alt=""
            @load="isLoading"
          />
          <div v-if="isLoading">loading...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isLoading = useState("isLoading", () => false);

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
console.log(props.currentWork);

useHead({
  title: `${props.work.name} | Nikita Isaev`,
});
</script>
