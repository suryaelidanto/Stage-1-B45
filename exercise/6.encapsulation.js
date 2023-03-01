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

    // setter
    set make(value) {
        if (value === "Honda") {
            console.log("The make cannot be Honda!")
            return
        }
        this._make = value
    }

    set model(value) {
        if (value === "") {
            console.log("The make cannot be empty!")
            return
        }
        this._make = value
    }


}

let mobilku = new Car("Tayo", "Oke1")
mobilku.make = "Honda"
mobilku.model = ""
console.log(mobilku.make)
console.log(mobilku.model)