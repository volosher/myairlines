import axios, { AxiosResponse } from 'axios'

interface ICurrency {
    Currencies: Array<ICurrencyItem>
}

export interface ICurrencyItem {
    Code: string,
    Symbol:string,
    ThousandsSeparator: string,
    DecimalSeparator: string,
    SymbolOnLeft: boolean,
    SpaceBetweenAmountAndSymbol: boolean,
    RoundingCoefficient: number,
    DecimalDigits: number
}

export async function getCurrency(): Promise<ICurrency> {
  const response: AxiosResponse = await axios.get<ICurrency>('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/currencies', {
    headers: {
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      'x-rapidapi-key': '9545c5caefmshc0af048c575ab1cp118982jsn3c9ab82c4e17',
    },
  })
  console.log(response.data)
  return response.data
}
