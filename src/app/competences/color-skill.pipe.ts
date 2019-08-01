import { Pipe, PipeTransform, DefaultIterableDiffer } from '@angular/core';

@Pipe(
    {
        name:"colorSkill"
    }
)
export class ColorSkillPipe implements PipeTransform{

    transform(name:string): string {
        let colorProgress:string;

        switch(name){
            case 'CSS 3':
                colorProgress = "blue";
                break;
            case 'Java':
                colorProgress = "orange";
                break;
            case 'Angular':
                colorProgress = "red";
                break;
            case 'HTML 5':
                colorProgress ="deep-orange";
                break;

            case 'NodeJS':
                colorProgress = "";
                break;
            case 'PHP':
                colorProgress = "deep-purple darken-1";
                break;
            default:
                colorProgress = "green"
        }

        return colorProgress;
    }
}