/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    var copyOfCollection = JSON.parse(JSON.stringify(collection));
    var argument = [].slice.call(arguments);
    argument.sort();
    if (argument.length == 1) {
        return copyOfCollection;
    }
    for (var i = 1; i < argument.length; i++) {
        if (argument[i][0] == 'filterIn') {
            var str_value = argument[i][2].join();
            for (var j = copyOfCollection.length - 1; j >= 0; j--) {
                if (str_value.indexOf(copyOfCollection[j][argument[i][1]]) == -1) {
                    copyOfCollection.splice(j, 1);
                }
            }
        }
        if (argument[i][0] == 'select') {
            var str_value = argument[i][1].join();
            for (var j = 0; j < copyOfCollection.length; j++) {
                var arr_value = Object.keys(copyOfCollection[j]);
                for (var l = 0; l < arr_value.length; l++) {
                    if (str_value.indexOf(arr_value[l]) == -1) {
                        delete copyOfCollection[j][arr_value[l]];
                    }
                }
            }
        }
    }
    return copyOfCollection;

}

/**
 * @params {String[]}
 */
function select() {
    let boxs = [].slice.call(arguments);
    return ['select', boxs];
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return ['filterIn', property, values];
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};