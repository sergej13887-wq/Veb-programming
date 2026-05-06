import { promises as fs } from 'fs';

export const exchange = async (filepath1, filepath2) => {
  const [data1, data2] = await Promise.all([
    fs.readFile(filepath1),
    fs.readFile(filepath2),
  ]);
  await Promise.all([
    fs.writeFile(filepath1, data2),
    fs.writeFile(filepath2, data1),
  ]);
};