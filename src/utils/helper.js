import dayjs from "dayjs";

export const getFormatedTime = (startDate, endDate, startTime, endTime) => {
  const startDateFormatted = dayjs(startDate).format("MMM DD");

  if (startDate.includes("N/A") || endTime.includes("N/A")) {
    return startDateFormatted;
  }

  return `${startDateFormatted} • ${startTime} - ${endTime}`;
};

export const getFormatedPrice = (price, bookingFee) => {
  if (parseInt(price) === 0) {
    return "";
  }
  let string = price;
  if (parseInt(bookingFee) > 0) {
    string += ` + ${bookingFee}`;
  }
  return string;
};
