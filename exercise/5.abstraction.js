class Car {
    constructor(make, model) {
        this._make = make
        this._model = model
    }

    // getter
    get make() {
        return this._make
    }

    get model() {
        return this._model
    }
}

let mobilku = new Car("Tayo", "Oke1")
console.log(mobilku.model)