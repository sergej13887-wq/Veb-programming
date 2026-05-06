import fs from 'fs';

export const compareFileSizes = (filepath1, filepath2, cb) => {
  fs.stat(filepath1, (err1, stats1) => {
    if (err1) {
      cb(err1);
      return;
    }

    fs.stat(filepath2, (err2, stats2) => {
      if (err2) {
        cb(err2);
        return;
      }

      const size1 = stats1.size;
      const size2 = stats2.size;

      let result;
      if (size1 > size2) {
        result = 1;
      } else if (size1 === size2) {
        result = 0;
      } else {
        result = -1;
      }

      cb(null, result);
    });
  });
};