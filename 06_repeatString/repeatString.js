const repeatString = function(word, repeat) {
    let wrd = "";
    if (repeat >= 0) {

        for (let i = 0; i < repeat; i++) {
            wrd = wrd + word;
        }
        return wrd
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
