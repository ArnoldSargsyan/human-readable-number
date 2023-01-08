module.exports = function toReadable (number) {
    let digits = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
    }
    let tenth = {
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen',
        0: 'twenty',
    }
    let hundredth = {
        1: 'ten',
    	2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }
    if (number >= 0 && number <= 10){
        return (digits[number]);
    }
    if (number > 10 && number <= 20){
        return (tenth[number.toString()[1]])
    }
    if (number > 20 && number < 100){
        if(number.toString()[1] == '0'){
            return (hundredth[number.toString()[0]]);
        }else {
            return (hundredth[number.toString()[0]] + ' ' + digits[number.toString()[1]])
        }
    }
    if (number >= 100 && number < 1000){
        if (number.toString()[1] == "0" && number.toString()[2] == "0"){
            return digits[number.toString()[0]] + " hundred";
        }else if (number.toString()[1] == "0"){
            return digits[number.toString()[0]] + " hundred " + digits[number.toString()[2]];
        }else if (number.toString()[1] == "1" && number.toString()[2] == 0){
            return digits[number.toString()[0]] + " hundred ten";
        }else if (number.toString()[1] == "1"){
            return digits[number.toString()[0]] + " hundred " + tenth[number.toString()[2]];
        }else if (number.toString()[2] == "0"){
            return digits[number.toString()[0]] + " hundred " + hundredth[number.toString()[1]];
        }else {
            return digits[number.toString()[0]] + " hundred " + hundredth[number.toString()[1]] + " " + digits[number.toString()[2]];
        }
    }
}
