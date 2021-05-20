export default function getLastOrder(array) {
  // получаем массив со всеми идентификаторами тасков
  const orders = array.map((item) => item.order);

  // если у нас пустой массив, начинаем с единицы
  if (!orders.length) {
    return 1;
  }

  // находим максимальный orders
  const maxOrder = Math.max(...orders);

  // возвращаем новый который больше максимального на единицу
  return maxOrder + 1;
}
