class A {
    constructor(name,job) {
        this.name = name
        console.log('AAAAAAAA', this.name, job)
        console.log(new.target)
    }
}

class B extends A {
    constructor(name, job) {
        super(name, job)
    }
}

const test = new B('BBBBB', 'coder')