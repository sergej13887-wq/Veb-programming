import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';


export const getDirectorySize = (dirPath, callback) => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      callback(err);
      return;
    }
    
    const filePaths = files.map(file => path.join(dirPath, file));
    
    async.map(filePaths, (filePath, done) => {
      fs.stat(filePath, (err, stats) => {
        if (err) {
          done(err);
          return;
        }
        done(null, stats);
      });
    }, (err, statsArray) => {
      if (err) {
        callback(err);
        return;
      }
      
      const totalSize = statsArray.reduce((sum, stats) => {
        return sum + (stats.isFile() ? stats.size : 0);
      }, 0);
      
      callback(null, totalSize);
    });
  });
};