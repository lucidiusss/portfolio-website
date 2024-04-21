<template>
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
          <span class="text-xs bg-stone-700 p-1 rounded">{{
            thisWork.date
          }}</span>
        </h1>
      </div>
    </div>
    <Work :work="thisWork" :currentWork="work" />
  </div>
</template>

<script setup>
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

fetchWork();
</script>
