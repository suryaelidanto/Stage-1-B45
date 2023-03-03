// async await -> mempermudah pemanggilan dari promise

let kondisi = false

let janji = new Promise(function (berhasil, gagal) {
    if (kondisi) {
        berhasil("Janji berhasil ditepati!")
    } else {
        gagal("Janjimu janji palsu!")
    }
})

// janji.then(response => console.log(response))

async function asyncFunction() {
    // best
    try {
        const rizki = await janji
        console.log(rizki)
    } catch (rizkiganteng) {
        console.log(rizkiganteng)
    }
}

asyncFunction()