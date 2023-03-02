function multipleBy(angka1) {
    return function (angka2) {
        return angka1 * angka2
    }
}

const double = multipleBy(2)
console.log(double(5))