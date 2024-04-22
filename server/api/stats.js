export default defineEventHandler(async () => {
  const { data } = await $fetch(
    "https://api.tracker.gg/api/v2/for-honor/standard/profile/ubi/lucidiusss"
  );
  return data;
});
