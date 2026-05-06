export default function each(collection, callback) {
  for (let i = 0; i < collection.length; i++) {
    const item = collection[i];
    callback.call(item, item, i, collection);
  }
}