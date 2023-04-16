class Device {
    constructor(name) {
        this.name = name
        this.owner = 'Mommy'
    }
        switchOn() {
            console.log(`${this.name} is switch on!`)
        }
}

class ElectricDevice extends Device {
    constructor(name, power) {
        super(name)
        this.power = power
    }

    getPower() {
        console.log(`${this.name} power is ${this.power}W!`)
    }
}

class CleanerDevice extends ElectricDevice {
    constructor(name, power, weight) {
        super(name, power)
        this.weight = weight
    }
    mileage(mileage) {
        console.log(`The mileage of ${this.name} is ${mileage} hours`)
    }
}


const hairbrush = new Device('hairbrush')
console.log(hairbrush)
hairbrush.switchOn()
console.log(hairbrush.owner)
console.log('---------------')

const lamp = new ElectricDevice('lamp', 200)
console.log(lamp)
lamp.switchOn()
lamp.getPower()
lamp.owner = 'Student'
console.log(lamp.owner)
console.log('---------------')

const vacCleaner = new CleanerDevice('dyson', 1000, 3)
console.log(vacCleaner)
vacCleaner.switchOn()
vacCleaner.getPower()
vacCleaner.mileage(10)
console.log(vacCleaner.owner)
console.log(`Weight of ${vacCleaner.name} - ${vacCleaner.weight} kilograms`)
console.log('---------------')