class Car {
    constructor(make, model) {
        this.make1 = make
        this.model1 = model
    }

    getInfo() {
        return `The car is a ${this.make1} ${this.model1}`
    }
}

let myCar = new Car("Toyota", "X77")
console.log(myCar.getInfo())
