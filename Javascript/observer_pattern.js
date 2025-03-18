class Subject {
    constructor() {
        this.observers = []
    }
    addObserver(observer) {
        this.observers.push(observer)
    }
    removeObserver(observer) { 
        this.observers=this.observers.filter(obs=>obs!==observer)
    }
    notify(data) {
        this.observers.forEach(observer=>observer.update(data))
    }
}
class Observer{
    constructor(name) {
        this.name=name
    }
    update(data) {
        console.log(`${this.name} updated ${data}`)
    }
}

const observer1 = new Observer('observer1')
const observer2 = new Observer('observer2')
const subject = new Subject()
subject.addObserver(observer1)
subject.addObserver(observer2)
subject.notify('hello')