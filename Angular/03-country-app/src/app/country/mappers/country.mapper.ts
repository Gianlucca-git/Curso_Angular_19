import {ResponseCountry} from '../interfaces/rest-country.interfaces';
import {CountryInfo} from '../interfaces/country.interfaces';

export class CountryMapper {

  static mapApiToCountryInfo(apiResponse: ResponseCountry): CountryInfo {
    return {
      id: apiResponse.cca2,
      img: apiResponse.flags.svg,
      name: apiResponse.name.common,
      nameOfficial: apiResponse.name.official,
      region: apiResponse.region,
      subregion: apiResponse.subregion,
      capital: apiResponse.capital.join(', '),
      indicative: `${apiResponse.idd.root}${apiResponse.idd.suffixes}`,
      population: apiResponse.population.valueOf(),
    };
  }

  static mapApiToCountryInfoArray(items: ResponseCountry[]): CountryInfo[] {
    return items.map(this.mapApiToCountryInfo);
  }
}
