import {Pipe, PipeTransform } from '@angular/core';

@Pipe ({ name: 'typeColor'})
export class TypeColorPipe implements PipeTransform{
    transform(type: string): string {
        let color;
        switch(type){
            case 'PHP':
                color = 'purple lighten-1';
                break;
            case 'MySQL':
                color = 'yellow';
                break;
            case 'Java':
                color = 'deep-orange';
                break;
            case 'Angular':
                color = 'red lighten-1'
                break;
            case 'NodeJS':
                color = 'green lighten-1';
                break;
            case 'MongoDB': 
                color = 'brown';
                break;
            case 'C#':
                color='blue';
                break;
            case 'HTML':
                color='orange lighten-1';
                break; 
            case 'CSS':
                color='blue lighten-1';
                break;
            case 'SQL Server':
                color='red';
                break;
            case 'WPF':
                color = 'blue';
                break;
            case 'ExpressJS':
                color = "grey darken-4";
                break;
            default:
                color = 'grey';
                break;
        }
        return "chip " + color;
    }
    
}