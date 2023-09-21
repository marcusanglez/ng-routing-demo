import { Injectable } from '@angular/core';
import {Country} from "../country";

@Injectable()

export class CountryService {

    constructor() { }

    getCountries(): Promise<Country[]>{
        return countriesPromise;
    }

    getCountry(id: number) {
        return this.getCountries()
            .then(countries =>
                countries.find(country => country.countryId === id));
    }
    updateCountry(country: Country){
        return this.getCountries()
            .then( countries => {
                let found = countries.find(countryElem => countryElem.countryId === country.countryId);
                found = country;
                return found;
            });
    }
    addCountry(country: Country){
        return this.getCountries()
            .then( countries => {
                    //
                    let maxIndex = countries.length -1;
                    let maxCountry = countries[maxIndex];
                    country.countryId = maxCountry.countryId + 1;
                    countries.push(country);
                    return country;
                }

            );
    }
}
const COUNTRIES = [
    new Country(1, 'Mexico', 'MexicoCity', 'Mexican Peso'),
    new Country(2, 'Canada', 'Ottawa', 'Canadian Dollar'),
    new Country(2, 'US', 'Washington D.C.', 'US Dollar'),
];

let countriesPromise = Promise.resolve(COUNTRIES);
