const isOdd = function(num) {
    return ((num % 2 !== 0));
}

const palindromes = function (str) {
    console.log(str);
    str = str.trim();
    const chars = [...str.matchAll(/\w/g)];
    const charCount = chars.length;
    let front = "";
    let back = "";

    if (isOdd(charCount)) {
        var midpoint = Math.floor(charCount / 2);
    
        for (let i = 0; i < midpoint; i++) {
            front += chars[i];
        }
    
        for (i = charCount - 1; i > midpoint; i--) {
            back += chars[i];
        }
    
    } else {
        var midpoint = (charCount / 2) - 1;
    
        for (let i = 0; i <= midpoint; i++) {
            front += chars[i];
        }
    
        for (i = charCount - 1; i > midpoint; i--) {
            back += chars[i];
        }
    
    }
    return front.toLowerCase() == back.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
