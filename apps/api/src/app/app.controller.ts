import { Controller, Get, Param, Res } from '@nestjs/common';
import { tap, map, catchError } from 'rxjs/operators';
import { ItemDetail } from '@rs3-tool/api-interfaces';
import { Observable, of } from 'rxjs'
import { AppService } from './app.service';
import { AxiosResponse, AxiosError } from 'axios';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('itemDetail/:id')
  getData(@Param() params): Observable<AxiosResponse<ItemDetail>> {
    return this.appService.getItemDetail(params.id).pipe(
      tap((r) => console.log(r)),
      catchError((err: AxiosError) => { 
        return of(err)
      }),
      map((res: AxiosResponse|AxiosError) => {


        if(res['isAxiosError']) {
          return {
            status: 400,
            code: res['code'],
            error: res['message']
          }
        } 
        else {
          return res['data']
        }
      })
    );
  }
}
