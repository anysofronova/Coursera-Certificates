// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function(command) {
    const commandSet = command.split(' ');
    if (commandSet[0] === 'ADD') {
        const name = commandSet[1];
        const phones = commandSet[2].split(',');
        if (phoneBook.hasOwnProperty(name)) {
            for (let i of phones) {
                if (phoneBook[name].indexOf(i) !== -1) {
                    continue;
                } else {
                    phoneBook[name].push(i)
                }
            }
        } else {
            phoneBook[name] = phones;
        }
    } else if (commandSet[0] === 'REMOVE_PHONE') {
        const phone = commandSet[1];
        for (let i in phoneBook) {
            let index = phoneBook[i].indexOf(phone);
            if (index !== -1) {
                phoneBook[i].splice(index, 1);
                return true
            }
        }
        return false
    } else if (commandSet[0] === 'SHOW') {
        const result = [];
        for (let i in phoneBook) {
            if (phoneBook[i].length < 1) {
                continue
            }
            result.push(i + ': ' + phoneBook[i].join(', '));
        }
        return result.sort();
    }
};