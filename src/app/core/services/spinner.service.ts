
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class SpinnerService {
  show() {
    console.log("showing spinner")
  }

  hide() {
    console.log("hide spinner")
  }
}
