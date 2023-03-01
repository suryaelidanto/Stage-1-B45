class Car {
    constructor(make, model) {
        this.make1 = make
        this.model1 = model
    }

    getRizki() {
        return `The car is a ${this.make1} ${this.model1}`
    }
}

class ElectricCar extends Car {
    constructor(make, model, batteryCapacity) {
        super(make, model)
        this.batteryCapacity1 = batteryCapacity
    }

    getInfo() {
        return `${super.getRizki()} it has a battery capacity of ${this.batteryCapacity1}`
    }
}

// let myCar = new Car("Toyota", "X77")
// console.log(myCar.getInfo())

let myElectricCar = new ElectricCar("Tesla", "Model S", 100)
console.log(myElectricCar.getInfo())
