import {ResponseCountry} from '../interfaces/rest-country.interfaces';
import {CountryInfo} from '../interfaces/country.interfaces';

export class CountryMapper {

  static mapApiToCountryInfo(apiResponse: ResponseCountry): CountryInfo {

    let indicative = `${apiResponse.idd.root}${apiResponse.idd.suffixes}`;
    if (indicative.length > 10) {
      indicative = `${indicative.substring(0, 9)}`;
    }

    let capital = "Don't have capital";
    if (apiResponse.capital) {
      capital = apiResponse.capital.join(', ');
    }

    return {
      id: apiResponse.cca2,
      img: apiResponse.flags.svg,
      name: apiResponse.name.common,
      nameOfficial: apiResponse.name.official,
      region: apiResponse.region,
      subregion: apiResponse.subregion,
      capital: capital,
      indicative: indicative,
      population: apiResponse.population.valueOf(),
      area: apiResponse.area.valueOf(),
    };
  }

  static mapApiToCountryInfoArray(items: ResponseCountry[]): CountryInfo[] {
    return items.map(this.mapApiToCountryInfo);
  }
}
