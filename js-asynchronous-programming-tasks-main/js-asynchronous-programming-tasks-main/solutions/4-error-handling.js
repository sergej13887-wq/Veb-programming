import fs from 'fs';

export const move = (src, dest, callback) => {
  fs.readFile(src, (err, data) => {
    if (err) {
      callback(err);
      return;
    }

    fs.writeFile(dest, data, (err) => {
      if (err) {
        callback(err);
        return;
      }

      fs.unlink(src, (err) => {
        if (err) {
          callback(err);
          return;
        }
        callback(null);
      });
    });
  });
};