export const todayToString = () => {
  return new Date().toLocaleDateString("en-UR", {
    month: "long",
    year: "numeric",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
  });
};
