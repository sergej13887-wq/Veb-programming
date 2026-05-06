import { promises as fs } from 'fs';

export const getTypes = (paths) => {
  const promises = paths.map(async (filepath) => {
    try {
      const stats = await fs.stat(filepath);
      return stats.isDirectory() ? 'directory' : 'file';
    } catch (err) {
      return null;
    }
  });
  return Promise.all(promises);
};