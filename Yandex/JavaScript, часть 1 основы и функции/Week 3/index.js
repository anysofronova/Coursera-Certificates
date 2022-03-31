/**
 * @param {String} date
 * @returns {Object}
 */

module.exports = function(date) {

    function changeDate(value, unit, _date) {
        if (unit === 'hours') {
            _date.setHours(_date.getHours() + value);
        } else if (unit === 'months') {
            _date.setMonth(_date.getMonth() + value);
        } else if (unit === 'days') {
            _date.setDate(_date.getDate() + value);
        } else if (unit === 'minutes') {
            _date.setMinutes(_date.getMinutes() + value);
        } else if (unit === 'years') {
            _date.setFullYear(_date.getFullYear() + value);
        } else {
            throw new TypeError('Error unit');
        }
        return _date
    }

    function addZero(e) {
        if (e < 10) {
            return '0' + e;
        }
        return e
    }

    function checkError(value) {
        if (!Number.isInteger(value) || value < 0) {
            throw new TypeError('Error value');
        }
    }

    let dateDay = date.split(' ')[0].split('-');
    let dateTime = date.split(' ')[1].split(':');
    let _date = new Date(dateDay[0], dateDay[1] - 1, dateDay[2], parseInt(dateTime[0]), dateTime[1]);
    return {
        add: function(value, unit) {
            checkError(value);
            _date = changeDate(parseInt(value), unit, _date);
            return this;
        },
        subtract: function(value, unit) {
            checkError(value);
            _date = changeDate(-parseInt(value), unit, _date);
            return this;
        },
        get value() {
            let year = _date.getFullYear();
            let month = addZero(_date.getMonth() + 1);
            let day = addZero(_date.getDate());
            let hours = addZero(_date.getHours());
            let minutes = addZero(_date.getMinutes());

            return year + "-" + month + '-' + day + ' ' + hours + ':' + minutes;
        }
    }
};