
/**
 * Нижний граница для знаковых чисел
 */
const typesI = [8, 16, 32].map((x) => -(2 ** x / 2));

/**
 * Верхняя граница для безнаковых чисел
 */
const typesU = [8, 16, 32, 64].map((x) => 2 ** x - 1);

/**
 *
 * @param num целочисленное число
 * @returns минимальный размер числа в битах
 *
 * Для знакового типа чисел вернёт отрицательное число, для безнакового положительное
 *
 * Исключительные ситуации:
 * * Вернёт `NaN`, если аргумент не является целочисленным числом
 * * Вернёт `0`, если целочисленное число выходит за рамки 64 битных чисел
 */
export function sizeof(num: number): number {
  if (!Number.isInteger(num)) {
    return NaN;
  }
  if (num < 0) {
    for (let index = 0; index < typesI.length; index++) {
      const size = typesI[index];
      if (num >= size) {
        return -(8 << index);
      }
    }
  }
  for (let index = 0; index < typesU.length; index++) {
    const size = typesU[index];
    if (num <= size) {
      return 8 << index;
    }
  }
  return 0;
}
