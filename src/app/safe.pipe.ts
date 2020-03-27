import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {}
 
  public transform(value: any, type: string): SafeUrl{
    console.log(value,type,"asd")  
  
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}