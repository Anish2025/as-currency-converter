import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_nlUVX2Pkhkq6DziqxHRN9XQh7d6jY3Vnl6g9ZVqz');


export async function convertCurrency(fromCurrency,toCurrency,units){
const res=await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
});
const multiplier = res.data[toCurrency];
return multiplier*units;
}
