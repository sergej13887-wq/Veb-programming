import { promises as fs } from 'fs';


export const touch = (filepath) => {
  return fs.writeFile(filepath, '', { flag: 'wx' })
    .catch(err => {
      if (err.code === 'EEXIST') {
        return;
      }
      throw err;
    });
};