const fibonacci = function(num) {
    num = Number(num);

    if (num < 0) {
        return "OOPS";
    } else if (num == 0) {
        return 0;
    } else if ((num == 1) || (num == 2)) {
        return 1;
    }

    const seq = [1, 1, 2];
    var i = 3;
    var next;

    while (seq.length < num) {
        next = seq[i - 2] + seq[i - 1];
        seq.push(next);
        i++;
    }

    return seq.pop();

};

// Do not edit below this line
module.exports = fibonacci;
