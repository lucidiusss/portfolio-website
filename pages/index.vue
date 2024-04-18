<template>
  <main
    class="w-1/3 mx-auto mt-10 px-3 text-black dark:text-white transition-all"
  >
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
      class="flex"
    >
      <h1
        class="rounded-xl shadow-lg text-center transition-all dark:bg-[#313134] bg-[#f5f0e8] p-5 mx-auto"
      >
        Hello, I`m a junior frontend developer based in Saint-Petersburg,
        Russia!
      </h1>
    </div>
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
      class="mt-10 flex items-center justify-between gap-6"
    >
      <div class="flex flex-col gap-1">
        <h1 class="text-4xl font-bold">Nikita Isaev</h1>
        <h2 class="text-md">Junior Frontend Developer / Streamer</h2>
      </div>
      <div class="w-24 h-24 flex">
        <img
          class="rounded-full border-collapse border-2 border-gray-600 dark:border-gray-300"
          src="../assets/images/me.jpg"
          alt=""
        />
      </div>
    </div>
    <Articles />
  </main>
</template>

<script setup></script>
