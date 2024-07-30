class Hewan {
    constructor(nama, spesies, usia){
    this._nama = nama
    this._spesies = spesies
    this._usia = usia
    }

    get nama(){
        return this._nama
    }

    get spesies(){
        return this._spesies
    }

    get usia(){
        return this._usia
    }

    suara(){
        console.error("Method `suara()` harus diimplementasikan di kelas turunannya")
    }

    berlari(){
        console.error("Method `berlari()` harus diimplementasikan di kelas turunannya")
    }
}

class Lion extends Hewan {
    constructor(nama, usia){
    super(nama, "mamalia", usia)
    }

    suara(){
        return `${this.nama} the lion says Roar!`
    }

    berlari(){
        return `${this.nama} the lion is running!`
    }
}

class Elephant extends Hewan {
    constructor(nama, usia){
    super(nama, "mamalia", usia)
    }

    suara(){
        return `${this.nama} the elephant says Trumpet!`
    }
}

class Monkey extends Hewan {
    constructor(nama, usia){
    super(nama, "mamalia", usia)
    }

    suara(){
        return `${this.nama} the monkey says Ooh Ooh Aah Aah!`
    }
}

const lion  = new Lion("Simba")
const elephant = new Elephant("Dumbo")
const monkey = new Monkey ("George")

const hewanArray = [lion, elephant, monkey]
hewanArray.forEach(Hewan => {
    console.log(Hewan.suara())
})

// const hewanlion = 
lion.berlari()
// console.log(`${this.nama} berlari`)
console.log(lion.berlari())