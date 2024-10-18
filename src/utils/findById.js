export default function findById(data, id) {
  return data.find((item) => item.id === id);
}
