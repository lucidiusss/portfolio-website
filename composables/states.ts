export const useDarkMode = () => useState<boolean>("darkMode", () => true);
export const useThisWork = () => useState("thisWork", () => {});
export const useLoading = () => useState("loading", () => true);
