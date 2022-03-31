module.exports = {

    database: {},

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function(event, subscriber, handler) {
        if (subscriber === undefined ||
            handler === undefined ||
            event === undefined) {
            return this;
        }
        if (this.database[event] === undefined) {
            this.database[event] = new Object;
            this.database[event]["client"] = [];
            this.database[event]["work"] = [];
        }
        this.database[event]["client"].push(subscriber);
        this.database[event]["work"].push(handler);
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function(event, subscriber) {
        if (subscriber === undefined ||
            event === undefined ||
            this.database[event] === undefined) {
            return this;
        }

        var indexs = [];

        this.database[event]["client"] = this.database[event]["client"].filter((element, index) => {
            if (element === subscriber) {
                indexs.push(index);
                return false;
            }
            return true;
        });

        this.database[event]["work"] = this.database[event]["work"].filter((element, index) => {

            if (indexs.includes(index)) {
                return false;
            }
            return true;
        });

        return this;
    },

    /**
     * @param {String} event
     */
    emit: function(event) {
        if (event === undefined ||
            this.database[event] === undefined) {
            return this;
        }

        for (var i = 0; i < this.database[event]["work"].length; ++i) {
            var func = this.database[event]["work"][i].bind(this.database[event]["client"][i]);
            func();
        }

        return this;
    }
};