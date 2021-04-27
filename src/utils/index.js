export function generateId(array) {
    // получаем массив со всеми идентификаторами тасков
    const ids = array.map((item) => {
        return item.id;
    });

    // если у нас пустой массив, начинаем с единицы
    if (!ids.length) {
        return 1;
    }

    // находим максимальный id
    const maxId = Math.max(...ids);

    // возвращаем новый который больше максимального на единицу
    return maxId + 1;
}