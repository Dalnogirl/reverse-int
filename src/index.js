module.exports = function reverse(n) {
    return Array.from(String(n)).reverse().filter(i => i !== '-').join('');
}
