export const formatDate = (datetime) => {
  const tanggal = new Date(datetime);
  return new Intl.DateTimeFormat("id-ID", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(tanggal);
};
