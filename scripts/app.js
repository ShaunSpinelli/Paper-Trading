// const {ajaxHandler} = require('./apiHandler.js')

let url = 'https://api.iextrading.com/1.0/ref-data/symbols';

ajaxHandler(url,companySymbolsParser);