import { NgModule } from '@angular/core';

import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { PostCodeService } from './postCode.service';

@NgModule({
    imports:[HttpClientModule],
    exports:[HttpClientModule],
    providers: [HttpClient, PostCodeService]
  })
  export class ServicesModule {}