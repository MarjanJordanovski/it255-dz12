import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
if(!searchText) return [];
searchText = searchText.toLowerCase();
return items.filter( it => {
return it.beds.toLowerCase().includes(searchText);
  });

}
}
