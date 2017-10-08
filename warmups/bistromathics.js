const parseAmount = (amount) => {
    amount = '$' + amount
    if (amount.indexOf('.') == -1){
        return amount + '.00'
    } else if (amount.length - amount.indexOf('.') < 3){
        return amount + 0
    } else {
        return amount
    }
}

const receipt = (costsPerItem, tip) => {
    return Math.round(costsPerItem.reduce((total, next) => total+next) * (109 + tip))/100
}

console.log(parseAmount(receipt([20, 30, 12.50], 14.43)))

const splitTheBill = (total, names) => {
    const part = Math.floor(total * 100 / names.length)
    let pennies = total * 100 - part * names.length
    names.forEach(function(element) {
        let owed = part
        if(pennies > 0){
            pennies -= 1
            owed += 1
        }

        owed = parseAmount(owed / 100)
        console.log(element + ' owes: ' + owed)
    }, this);
}

splitTheBill(receipt([20, 31, 12.50], 14.43), ['Angela', 'Salvador', 'Rosa'])


const funcSplitTheBill = (total, names) => {
    parts = Array(names.length).fill(Math.floor(total * 100 / names.length)).map((v, i) => total * 100 - v * 3 > i ? (v + 1) / 100 : v / 100)

    names.forEach(function(name, i) {
        console.log(name + ' owes: ' + parseAmount(parts[i]))
    }, this);
}

funcSplitTheBill(receipt([20, 31, 12.50], 14.43), ['Angela', 'Salvador', 'Rosa'])