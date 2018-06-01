import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultExceptionText'
})
export class DefaultExceptionTextPipe implements PipeTransform {

  transform(errorText: string): string {
    return errorText ? errorText : '无异常';
  }

}
