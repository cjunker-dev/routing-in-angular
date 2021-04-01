import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolDisplayPipe implements PipeTransform {

  transform(value: boolean, locale: string = "en"): string {
    if (locale == "en") {
      return value ? "Yes" : "No";
    }
    if (locale == "fr"){
      return value ? "Oui" : "Non";
    }
  }

}
