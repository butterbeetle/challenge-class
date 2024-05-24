export function currentDateToArray() {
  const newDate = new Date()
    .toLocaleString("ko-KR", { hour12: true })
    .split(". ");

  return newDate;
}

export function arrayToDate(array, type) {
  const [year, month, day, date] = array;

  const formattingDate = date.split(":").slice(0, 2).join(":");

  if (type === "full") {
    return `${year}년 ${month}월 ${day}일 ${formattingDate}`;
  } else if (type === "date") {
    return formattingDate;
  }
}
