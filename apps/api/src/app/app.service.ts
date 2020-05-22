import { Injectable, HttpService } from '@nestjs/common';
import { ItemDetail } from '@rs3-tool/api-interfaces';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class AppService {
  private RS_GE_SERVICE_URL = 'http://services.runescape.com/m=itemdb_rs/api/catalogue/detail.json'; //?item=12093

  getItemDetail(item: string): Observable<AxiosResponse<ItemDetail>> {
    return this.httpService.get<ItemDetail>(this.RS_GE_SERVICE_URL, {params: {item}})
  }

  constructor(private httpService: HttpService) {}
}