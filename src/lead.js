class Leader {
    constructor() {
        this.nextLeader = null
    }
    setNext(next) {
        this.nextLeader = next
        return next
    }
}

class Department extends Leader {
    handle(duration) {}
}

class Company extends Leader {
    handle(duration) {}
}

class Group extends Leader {
    handle(duration) {}
}

const zhangsan = new Department()
const Lisi = new Company()
const Wangwu = new Group()

zhangsan.setNext(Lisi).setNext(Wangwu)
console.log(zhangsan)