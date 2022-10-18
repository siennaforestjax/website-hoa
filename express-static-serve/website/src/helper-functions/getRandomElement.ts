export default function getRandomElement(items: Array<any>) {
  return items[Math.floor(Math.random() * items.length)];
}
