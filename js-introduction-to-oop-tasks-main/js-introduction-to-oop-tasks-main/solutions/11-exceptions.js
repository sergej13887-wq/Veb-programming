export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

export function parseJson(jsonString) {
    try {
        // Пытаемся распарсить переданную строку
        return JSON.parse(jsonString);
    } catch (error) {
        // Если произошла ошибка, выбрасываем ParseError
        throw new ParseError('Invalid JSON string');
    }
}