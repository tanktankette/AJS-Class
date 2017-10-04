const receipt = (costsPerItem, t) => {
    let total = 0
    for(let i = 0; i < costsPerItem.length; i++){
        total += costsPerItem[i]
    }
    let s = '$' + Math.round(total * (109 + t))/100
    if (s.indexOf('.') == -1){
        return s + '.00'
    } else if (s.length - s.indexOf('.') < 3){
        return s + 0
    } else {
        return s
    }
}

console.log(receipt([20, 30, 12.50], 14.4))