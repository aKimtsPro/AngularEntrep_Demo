import { Pipe, PipeTransform } from '@angular/core';
import { Voiture } from '../models/voiture.model';

@Pipe({
  name: 'voiture'
})
export class VoiturePipe implements PipeTransform {

  transform(value: Voiture, abrege?: boolean, powerUnit?: string ): string {

    if( powerUnit == undefined ) {
      powerUnit = 'ch';
    }

    let markMod;
    if(abrege)
      markMod = value.marque.charAt(0) + '.' + value.model.charAt(0) + '.';
    else
      markMod = value.marque + ' - ' + value.model;

    return markMod + ' - ' + value.puissance + powerUnit;
  }

}
