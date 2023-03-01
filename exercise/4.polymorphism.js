class Vehicle {
    drive() {
        return "The vehicle is driving..."
    }
}

class Car extends Vehicle {
    drive() {
        return "The car is driving..."
    }
}

class ElectricCar extends Vehicle {
    drive() {
        return "The electric car is driving silently..."
    }
}

let myCar = new Car()
console.log(myCar.drive())