const countDown = (num) => {
    if (num <= 0) {
        return
    }
    console.log(num)
    countDown(num -1)
}

const sumRange = (num, total = 0) => {
    if (num <= 0) {
        return total
    }
    return sumRange(num -1, total + num)
}

countDown(5)
console.log(sumRange(3))
