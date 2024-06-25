export const calculateTotalCost = (
  startTime: Date,
  pricePerHour: number,
  returnTime: string,
) => {
  const start = new Date(startTime);
  const end = new Date(returnTime);

  const diffHours = (end - start) / (1000 * 60 * 60);
  // console.log(diffHours);
  const totalHours = Number(diffHours.toFixed(2));

  const totalCost = (totalHours * pricePerHour).toFixed(2);

  return {
    totalCost,
  };
};
