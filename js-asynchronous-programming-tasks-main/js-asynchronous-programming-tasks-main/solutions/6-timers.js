import fs from 'fs';
export default function watch(filepath, interval, callback) {
  const startTime = Date.now();
  let previousMtime = null;
  const timerId = setInterval(() => {
    fs.stat(filepath, (err, stats) => {
      if (err) {
        clearInterval(timerId);
        callback(err);
        return;
      }
      const currentMtime = stats.mtimeMs;
      if (previousMtime === null) {
        // первая проверка: сравниваем с моментом вызова
        if (currentMtime > startTime) {
          callback(null);
        }
        previousMtime = currentMtime;
      } else {
        if (currentMtime > previousMtime) {
          callback(null);
          previousMtime = currentMtime;
        }
      }
    });
  }, interval);
  return timerId;
}