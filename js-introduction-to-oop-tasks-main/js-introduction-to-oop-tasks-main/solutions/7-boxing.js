export default function magic(...args) {
    // Инициализация суммы
    const sum = args.reduce((acc, num) => acc + num, 0);

    // Динамическая внутренняя функция
    const inner = (...args) => {
        // Создаем сумму для новых аргументов
        return magic(sum + args.reduce((acc, num) => acc + num, 0));
    };

    // Переопределяем valueOf
    inner.valueOf = () => sum;

    return inner; // Возвращаем внутреннюю функцию
}