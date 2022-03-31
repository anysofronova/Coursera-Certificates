/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function(hashtags) {
    for (let i = 0; i < hashtags.length; i++) {
        hashtags[i] = hashtags[i].toLowerCase();
    }
    newHashTags = [...new Set(hashtags)];
    return newHashTags.join(', ')
};