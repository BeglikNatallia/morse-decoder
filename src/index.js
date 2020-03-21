const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let divededBy10 = [];
    let morseLetter = [];
    let encodedSymbol = {
        '10': '.',
        '11': '-',
        '00': '',
        '**': ' '
    };

    for (let i = 0; i < expr.length; i += 10) {
        divededBy10.push(expr.substring(i, i + 10));
    }

    for (let i = 0; i < divededBy10.length; i++) {
        let divededBy2 = [];
        for (let j = 0; j < divededBy10[i].length; j += 2) {
            divededBy2.push(divededBy10[i].substring(j, j + 2));
        }
        morseLetter.push(divededBy2.map(el => encodedSymbol[el]).join(''));
    }

    return morseLetter.map(el => {
            if (el === '     ') return ' ';

            return MORSE_TABLE[el];
        }
    ).join('');

}

module.exports = {
    decode
};