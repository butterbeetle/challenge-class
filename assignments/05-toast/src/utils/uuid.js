export default function uuid() {
  return `_${Math.random().toString(36).slice(3, 23)}`;
}
