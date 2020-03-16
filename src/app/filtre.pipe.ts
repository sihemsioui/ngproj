import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtre'
})
export class FiltrePipe implements PipeTransform {

  transform(items: any[], searchText: string) {

    if(!items) return [];
    if(!searchText) return items;
     searchText = searchText.toLowerCase();
      return items.filter( it => {return it.includes(searchText); });

  }

}
