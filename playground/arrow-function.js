var user = {
    name: "Joey",
    sayHi: () => {
        console.log(`Hiya, ${user.name}`) // gross...
    },
    sayHiAlt() {
        console.log(`Hiya, ${this.name}`)
    }
}

user.sayHi()
user.sayHiAlt()