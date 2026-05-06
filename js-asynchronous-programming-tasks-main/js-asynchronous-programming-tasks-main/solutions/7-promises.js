import { promises as fs } from 'fs';

export const reverse = (filepath) => {
  return fs.readFile(filepath, 'utf8')
    .then(data => {
      const lines = data.split('\n');
      const reversedLines = lines.reverse().join('\n');
      return fs.writeFile(filepath, reversedLines);
    });
};