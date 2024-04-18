<template>
  <div class="mx-auto container w-1/3 mt-32">
    <h1 class="text-black dark:text-white">{{ work }}</h1>
  </div>
</template>

<script setup>
const { work } = useRoute().params;
</script>
