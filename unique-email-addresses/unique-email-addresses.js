/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const emailSet = new Set();
    for (let i = 0; i < emails.length; i++) {
        let local = '';
        const domain = emails[i].slice(emails[i].indexOf('@'), emails[i].length);
        let j = 0;
        while (emails[i][j] !== '+' && emails[i][j] !== '@') {
            if (emails[i][j] !== '.') local += emails[i][j]
            j++;
        }
        emailSet.add(local + domain)
    }
    return emailSet.size;
};