function Device(name) {
    this.name = name
    this.owner = 'Mommy'
    this.switchOn = function (){
        console.log(`${this.name} is switch on!`)
    }
}


function ElectricDevice(name, power) {
    this.name = name
    this.power = power
}
ElectricDevice.prototype = new Device()


ElectricDevice.prototype.getPower = function (){
    console.log(`${this.name} power is ${this.power}W!`)
}

function CleanerDevice(name, power, weight){
    this.name = name
    this.power = power
    this.weight = weight
}

CleanerDevice.prototype = new ElectricDevice()

CleanerDevice.prototype.mileage = function (mileage){
    console.log(`The mileage of ${this.name} is ${mileage} hours`)
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
console.log('---------------')

