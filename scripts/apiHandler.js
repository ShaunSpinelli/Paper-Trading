// handles AJAX requests to IEX Trading


function ajaxHandler(url, callback) {
    
    fetch(url)
    .then(response => response.json())
    .then(response => callback(response))
    .catch(err => {
        alert(err)
    })
}

// function for parsing various Ajax requests
// Symbols and names
function companySymbolsParser(companies){
    // Save company name and symbols to local storage
    const nameSymbol = companies.map(item => {
        let obj = {}
        obj.name = item.name;
        obj.symbol = item.symbol;
        return obj;
    })
    localStorage.setItem('companySymbols', JSON.stringify(nameSymbol))
    //return nameSymbol; // for testing
}


// Company Information

//Building url

function buildUrl(requestType,...symbol){
    const main = 'https://ws-api.iextrading.com/1.0/'
    const type = requestType
}


// let url = 'https://api.iextrading.com/1.0/ref-data/symbols';

//ajaxHandler(url,companySymbolsParser);

// module.exports = {ajaxHandler, companySymbolsParser};