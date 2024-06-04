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
    class="mx-auto 2xl:w-1/3 xl:w-1/2 lg:w-1/2 md:w-full xs:w-full sm:w-full mt-20"
  >
    <div class="p-4">
      <div class="flex gap-1 items-center">
        <NuxtLink
          class="dark:text-pink-500 text-[#3d7aed] max-sm:text-sm hover:underline underline-offset-4 custom-transition"
          to="/works"
        >
          Works
        </NuxtLink>
        <Icon
          :color="colorMode.preference === 'dark' ? 'white' : 'black'"
          size="12"
          name="material-symbols:arrow-forward-ios"
        />
        <h1 class="text-xl max-sm:text-md text-black dark:text-white font-bold">
          {{ thisWork.name }}
          <span class="text-xs dark:bg-stone-700 bg-white p-1 rounded">{{
            thisWork.date
          }}</span>
        </h1>
      </div>
    </div>
    <Work :work="thisWork" :currentWork="work" />
  </div>
</template>

<script setup>
const colorMode = useColorMode();

const { work } = useRoute().params;
const loading = useLoading();
const thisWork = ref();

const nuxtApp = useNuxtApp();

nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});

const fetchWork = async () => {
  try {
    const { data: w } = await useFetch(
      `https://bb4599e9b6e5bd96.mokky.dev/works?link=${work}`
    );
    thisWork.value = w.value[0];
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  nextTick(async () => {
    fetchWork();
  });
});
</script>
