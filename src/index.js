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
    let decodeWordrArr = [];
    for(let i = 0; i <= expr.length; i += 10 ) {
        let decodeLetter = expr.slice(i, i + 10);
        let decodeLetterArr = [];

        if(decodeLetter === '**********') decodeWordrArr.push(' ')
        for(let i = 0; i <= decodeLetter.length; i += 2 ) {
            let decodeNewArr = decodeLetter.slice(i, i + 2);
            decodeLetterArr.push(decodeNewArr.replace(/10/g, '.').replace(/11/g, '-').replace(/00/g, ''))
        }
        decodeWordrArr.push(MORSE_TABLE[decodeLetterArr.join('')])
    }
    return decodeWordrArr.join('')
}

module.exports = {
    decode
}