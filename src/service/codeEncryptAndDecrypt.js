const OtherSymbols = [' ',',','.',':',';','!','?','-','_','=','+','(',')','[',']','@','`',"'",'"','<','>','|','/','%','$','^','&','*','~'];
const Numbers = ['0','1','2','3','4','5','6','7','8','9'];
const RusAlfUp = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];
const RusAlfLower = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
const EngAlfUp = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const EngAlfLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','m','o','p','q','r','s','t','u','v','w','x','y','z'];

let RusAlfUpEncrypt = Array(33);
let RusAlfLowerEncrypt = Array(33);
let EngAlfUpEncrypt = Array(26); 
let EngAlfLowerEncrypt = Array(26);
let NumbersEncrypt = Array(10);

let pos;

function contains(symb, arr) {
    const letter = symb;
    pos = 0;
    for (let i = 0; i < arr.length; i++) {
      if (letter === arr[i]) {
        pos = i;
        return true;
      }
    }
}

function CezarEncrypt(stap, arr) {
    let CopyAlf = arr.slice();
    let i = 0;
    
    while ((i + stap) < (CopyAlf.length)) {
      const buff = CopyAlf[i];
      CopyAlf[i] = CopyAlf[i + stap];
      CopyAlf[i + stap] = buff;
      i++;     
    }
    return CopyAlf;
}

function initEncrypt(UserStep) {
    RusAlfUpEncrypt = CezarEncrypt(UserStep, RusAlfUp);
    RusAlfLowerEncrypt = CezarEncrypt(UserStep, RusAlfLower);
    NumbersEncrypt = CezarEncrypt(UserStep, Numbers);
    EngAlfUpEncrypt = CezarEncrypt(UserStep, EngAlfUp);
    EngAlfLowerEncrypt = CezarEncrypt(UserStep, EngAlfLower);
}

const codeEncrypt = (text, stap) => {
    initEncrypt(stap);

    let result = '';
    for (let i = 0; i <= text.length; i++) {
        let symbol = text[i];
        if (contains(symbol, OtherSymbols)) {
        result += symbol;
        }
        if (contains(symbol, Numbers)) {
        symbol = NumbersEncrypt[pos];
        result += symbol;
        }
        if (contains(symbol, RusAlfUp)) {
            symbol = RusAlfUpEncrypt[pos];
            result += symbol;
        }
        if ((contains(symbol, RusAlfLower))) {
            symbol = RusAlfLowerEncrypt[pos];
            result += symbol;
        }
        if (contains(symbol, EngAlfUp)) {
            symbol = EngAlfUpEncrypt[pos];
            result += symbol;
        }
        if ((contains(symbol, EngAlfLower))) {
            symbol = EngAlfLowerEncrypt[pos];
            result += symbol;
        }
    }
    return result;
};

const codeDecrypt = (text, stap) => {
    initEncrypt(stap);
    
    let result = '';
    for (let i = 0; i <= text.length; i++) {
        var symbol = text[i];
        if (contains(symbol, OtherSymbols)) {
            result += symbol;
        }
        if (contains(symbol, NumbersEncrypt)) {
            symbol = Numbers[pos];
            result += symbol;
        }
        if (contains(symbol, RusAlfUpEncrypt)) {
            symbol = RusAlfUp[pos];
            result += symbol;
        }
        if ((contains(symbol, RusAlfLowerEncrypt))) {
            symbol = RusAlfLower[pos];
            result += symbol;
        }
        if (contains(symbol, EngAlfUpEncrypt)) {
            symbol = EngAlfUp[pos];
            result += symbol;
        }
        if ((contains(symbol, EngAlfLowerEncrypt))) {
            symbol = EngAlfLower[pos];
            result += symbol;
        }
    }
    return result;
};

export { codeEncrypt, codeDecrypt };