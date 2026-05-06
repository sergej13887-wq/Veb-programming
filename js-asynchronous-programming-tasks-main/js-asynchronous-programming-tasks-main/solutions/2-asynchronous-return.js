import fs from 'fs';

export default function write(path, data, callback) {
    fs.writeFile(path, data, (err) => {
        // Игнорируем ошибку и вызываем колбэк, как требуется в примере
        callback();
    });
}