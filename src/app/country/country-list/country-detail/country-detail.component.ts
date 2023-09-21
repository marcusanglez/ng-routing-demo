import {Component, OnInit} from '@angular/core';
import {Country} from "../../country";
import {CountryService} from "../../service/country.service";
import {ActivatedRoute, Params} from "@angular/router";
import {switchMap} from "rxjs";

@Component({
  // selector: 'app-country-detail',
  templateUrl: './country-detail.component.html'
})
export class CountryDetailComponent implements OnInit{
  country = {} as Country | undefined;
  constructor(
      private countryService: CountryService,
      private route: ActivatedRoute) { }
  ngOnInit(): void{
    this.route.params.pipe(
        switchMap((params: Params) =>
            this.countryService.getCountry(+params['country-id']))
    ).subscribe(country => this.country = country);
  }
}
