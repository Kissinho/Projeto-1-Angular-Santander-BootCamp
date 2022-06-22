import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'replace'
})

export class ReplacePipe implements PipeTransform{


    transform(value: string, caractere: string, valueToReplace: string) {
        return value.replace(caractere, valueToReplace)
    }
}