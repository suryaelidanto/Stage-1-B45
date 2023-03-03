// 3 status promise : pending, fullfil / resolved, failure / rejected

// pelayan -> berjanji kepada pelanggan kalau dia akan menyiapkan masakan nasi goreng jumbo -> memproses hidangan ke juru masak (pending) -> kondisi : -> 1. juru masak bisa menyelesaikan (fullfil / resolved) -> 2. juru masak, gagal bakal bikin nasgor, gosong (failure / rejected)

let kondisi = false

let janji = new Promise(function (berhasil, gagal) {
    if (kondisi) {
        berhasil("Janji berhasil ditepati!")
    } else {
        gagal("Janjimu janji palsu!")
    }
})

janji.then(response => console.log(response)).catch((error) => console.log(error))