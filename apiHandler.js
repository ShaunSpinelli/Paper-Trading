// handles AJAX requests to IEX Trading


// Symbols and names

fetch('https://api.iextrading.com/1.0/ref-data/symbols')
    .then(response => {
        return response.json()
    }).then(response => {
        console.table(response[1])
    })

