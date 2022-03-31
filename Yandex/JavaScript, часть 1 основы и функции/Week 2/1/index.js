/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function(tweet) {
    const hashTags = [];
    tweet.split(' ').forEach(i => {
        if (i.startsWith('#')) {
            hashTags.push(i.slice(1));
        }
    })
    return hashTags
};