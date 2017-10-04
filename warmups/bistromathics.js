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
    let total = 0
    for(let i = 0; i < costsPerItem.length; i++){
        total += costsPerItem[i]
    }
    return Math.round(total * (109 + tip))/100
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

splitTheBill(receipt([20, 30, 12.50], 14.43), ['Jenna', 'Ruth', 'Nick'])