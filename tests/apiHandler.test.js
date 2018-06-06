// Jest tests for apiHandler
const {companySymbolsParser} = require('../scripts/apiHandler');

test('Parse Company symbols', () => {
    const info = [{
        symbol: "A",
        name: "Agilent Technologies Inc.",
        date: "2018-06-01",
        isEnabled: true,
        type: "cs"
    }, {
        symbol: "AA",
        name: "Alcoa Corporation",
        date: "2018-06-01",
        isEnabled: true,
        type: "cs"
    }]
    expect(companySymbolsParser(info)).toEqual([{
        symbol: "A",
        name: "Agilent Technologies Inc."
    }, {
        symbol: "AA",
        name: "Alcoa Corporation",
    }])
})