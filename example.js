const flights = {
  Quotes: [
    {
      QuoteId: 1,
      MinPrice: 206,
      Direct: false,
      OutboundLeg: {
        CarrierIds: [1812],
        OriginId: 68529,
        DestinationId: 63104,
        DepartureDate: '2021-09-30T00:00:00',
      },
      QuoteDateTime: '2021-09-28T20:57:00',
    },
  ],
  Carriers: [
    {
      CarrierId: 1812,
      Name: 'UTair',
    },
  ],
  Places: [
    {
      Name: 'Boryspil',
      Type: 'Station',
      PlaceId: 63104,
      IataCode: 'KBP',
      SkyscannerCode: 'KBP',
      CityName: 'Kyiv',
      CityId: 'KIEV',
      CountryName: 'Ukraine',
    },
    {
      Name: 'Minsk International 2',
      Type: 'Station',
      PlaceId: 68529,
      IataCode: 'MSQ',
      SkyscannerCode: 'MSQ',
      CityName: 'Minsk',
      CityId: 'MSQA',
      CountryName: 'Belarus',
    },
    {
      Name: 'Minsk',
      Type: 'City',
      PlaceId: 3289409,
      SkyscannerCode: 'MSQA',
      CityId: 'MSQA',
      CountryName: 'Belarus',
    },
  ],
  Currencies: [
    {
      Code: 'USD',
      Symbol: '$',
      ThousandsSeparator: ',',
      DecimalSeparator: '.',
      SymbolOnLeft: true,
      SpaceBetweenAmountAndSymbol: false,
      RoundingCoefficient: 0,
      DecimalDigits: 2,
    },
  ],
  Routes: [
    {
      Price: 206,
      QuoteDateTime: '2021-09-28T20:57:00',
      OriginId: 3289409,
      DestinationId: 63104,
      QuoteIds: [1],
    },
  ],
}

function transformArrayToMap(array, key) {
  return array.reduce((result, item) => {
    result[item[key]] = item

    return result
  }, {})
}

const places = transformArrayToMap(flights.Places, 'PlaceId')
const quotes = transformArrayToMap(flights.Quotes, 'QuoteId')

console.log(
  JSON.stringify(
    flights.Routes.map((route) => {
      return {
        Origin: places[route.OriginId],
        Destination: places[route.DestinationId],
        Price: route.Price,
        Quotes: route.QuoteIds.map((QuoteId) => quotes[QuoteId]),
      }
    }),
  ),
)
