import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform (items: any[], searchText: string, fieldName?: string) {
        // return empty array if array is falsy
        if (!items) return [];
        // return the original array if search text is empty
        if (!searchText || searchText === '') return items;
        // convert the searchText to lower case
        searchText = searchText.toLowerCase();
        if (fieldName) {
            // retrun the filtered array
            return items.filter((item) => {
                if (item && item[fieldName]) {
                    return item[fieldName].toLowerCase().includes(searchText);
                }
                return false;
            });
        }

        return items.filter((item) => {
            return item.toLowerCase().includes(searchText);
        });
    }
}
