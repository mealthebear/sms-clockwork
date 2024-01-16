export const getTimestampToday = (): string => {
  const currentDate = new Date();
  const formattedTimestamp = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Use 24-hour format
  }).format(currentDate);
  return formattedTimestamp;
};

export default { getTimestampToday };
