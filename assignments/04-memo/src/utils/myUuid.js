export default function createUuid() {
  return `_${Math.random().toString(36).slice(2, 16)}`;
}
