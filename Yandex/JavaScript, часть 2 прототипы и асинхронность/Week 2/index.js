module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    if (arguments[0] == undefined) {
        this.elements = [];
    } else {
        this.elements = arguments[0];
    }
};

Collection.from = function() {
    return new Collection(arguments[0])
};

Collection.prototype.count = function() {
    return this.elements.length;
};

Collection.prototype.values = function() {
    return this.elements;
};

Collection.prototype.at = function() {
    return this.elements[arguments[0] - 1] ? this.elements[arguments[0] - 1] : null;
};

Collection.prototype.append = function() {
    if (arguments[0] instanceof Collection) this.elements = this.elements.concat(arguments[0].values())
    else this.elements.push(arguments[0])
};

Collection.prototype.removeAt = function() {
    if (this.elements[arguments[0] - 1]) {
        this.elements.splice(arguments[0] - 1, 1);
        return true;
    }
    return false;
};