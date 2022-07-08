export default function sortStringDates(
  stringDate1: string,
  stringDate2: string
) {
  if (!stringDate1) {
    return -1;
  }

  if (!stringDate2) {
    return 1;
  }

  const date1 = new Date(stringDate1);
  const date2 = new Date(stringDate2);

  if (date1 < date2) {
    return -1;
  }

  if (date1 > date2) {
    return 1;
  }

  return 0;
}
