class Washer {
    constructor(motorType,rollerType,transducerType) {
        this.motor = new Motor(motorType)
        this.roller = new Roller(rollerType)
        this.transducer = new Transducer(transducerType)
    }
    work() {
        this.motor.run()
        this.roller.run()
        this.transducer.run()
    }
}

class Motor {
    constructor(motorType) {
        this.motorType = motorType + '电机'
    }
    run() {
        console.log(this.motorType+ '开始工作')
    }
}

class Roller {
    constructor(rollerType) {
        this.rollerType = rollerType + '滚筒'
    }
    run() {
        console.log(this.rollerType)
    }
}

class Transducer {
    constructor(transducerType) {
        this.transducerType = transducerType + '变频器'
    }
    run() {
        console.log(this.transducerType)
    }
}

export default Washer 