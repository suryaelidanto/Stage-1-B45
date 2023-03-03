const xhr = new XMLHttpRequest()

xhr.open('GET', "https://your-url.com", true)

// API -> data yang ada diinternet / diserver

// param 1: method ->  GET, POST, PUT, PATCH
// param 2 : url -> linknya
// param 3 : async -> true or false

xhr.onload = () => { } // untuk mengecek status request, saat di load
xhr.onerror = () => { } // ketika kondisinya error kita mau menjalankan apa
xhr.send() // kirim request ke server


