export default function sortDates(
  unixDate1: number,
  unixDate2: number
) {
  if (!unixDate1) {
    return -1;
  }

  if (!unixDate2) {
    return 1;
  }

  const date1 = new Date(unixDate1);
  const date2 = new Date(unixDate2);

  if (date1 < date2) {
    return -1;
  }

  if (date1 > date2) {
    return 1;
  }

  return 0;
}
