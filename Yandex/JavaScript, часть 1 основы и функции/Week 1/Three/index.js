/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function(hours, minutes, interval) {
    hours += Math.floor((minutes + interval) / 60);
    minutes = (minutes + interval) % 60;
    if (hours > 23) {
        hours %= 24;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    return `${hours}:${minutes}`;
};