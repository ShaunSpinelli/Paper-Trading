// handles AJAX requests to IEX Trading


// Symbols and names
function AjaxHandler(url, callback) {

    fetch(url)
        .then(response => response.json())
        .then(response => callback(response))
        .catch(err => {
            alert(err)
        })
}


function saveCompanyInfoSymbols(companies){
    // Save company name and symbols to local storage
    const nameSymbol = companies.map(item => {
        let obj = {}
        obj.name = item.name;
        obj.symbol = item.symbol;
        return obj;
    })
    localStorage.setItem('companySymbols', JSON.stringify(nameSymbol))
}


let url = 'https://api.iextrading.com/1.0/ref-data/symbols';

AjaxHandler(url,saveCompanyInfoSymbols);