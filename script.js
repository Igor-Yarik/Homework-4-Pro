const numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (numOrStr.trim()) {
    case null:
        console.log('ви скасували');
        break;
    case '':
        console.log('Empty String');
        break;      
    case isNaN (numOrStr) && numOrStr:
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}