function hideNumber(newNumber){
    return newNumber.slice(0,-2)+"**"
}


console.log(hideNumber("+996 555 424 424 "))

console.log(hideNumber("+996 700 340 340 "))



function myReverse(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

// Пример использования
const originalString = "123456789";
const reversedString = myReverse(originalString);
console.log(reversedString); // Вывод: "987654321"