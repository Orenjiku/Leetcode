/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function(s) {
    if (/[a-zA-Z]/.test(s[0])) {
        const emailArr = s.match(/([a-zA-Z]+(?=@))(@[a-zA-Z]+\.[a-zA-Z]+)/)
        const local = emailArr[1].toLowerCase().replace(/(?<=[a-z])[a-z]*(?=[a-z])/, '*****')
        const domain = emailArr[2].toLowerCase();
        return local + domain;
    } else {
        const phoneNumbers = s.match(/\d/g);
        const phoneLen = phoneNumbers.length
        const lastFour = phoneNumbers.slice(phoneLen - 4, phoneLen).join('');
        return (phoneLen === 10) ? `***-***-${lastFour}` : `+${'*'.repeat(phoneNumbers.length - 10)}-***-***-${lastFour}`;
    }
};