import moment from "moment";

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const getInitials = (name) => {
  if (!name) return "";

  const words = name.split(" ");
  let initials = "";

  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i][0].toUpperCase();
  }
  return initials.toUpperCase;
};

export const addThousandsSeparator = (num) => {
  if (num === null || isNaN(num)) return "";

  const [integralPart, fractionalPart] = num.toString().split(".");
  const formattedInteger = integralPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return fractionalPart
    ? `${formattedInteger}.${fractionalPart}`
    : formattedInteger;
};

export const prepareExpenseBarChartData = (data = []) => {
  const chartData = data.map((item) => {
    // Handle the new date format "2025-08-27"
    const date = new Date(item?.date);

    // Format to readable date
    const readableDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }); // This will give you "Aug 27"

    return {
      month: readableDate, // "Aug 27"
      amount: Number(item?.amount),
      category: item?.category,
    };
  });

  return chartData;
};

export const prepareIncomeBarChartData = (data = []) => {
  const sortedData = [...data].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format("DD MMM"),
    amount: item?.amount,
    source: item?.source,
  }));
  return chartData;
};

export const prepareExpenseLineChartData = (data = []) => {
  const sortedData = [...data].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format("DD MMM"),
    amount: item?.amount,
    category: item?.category,
  }));

  return chartData;
};
