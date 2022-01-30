import { Injectable } from '@angular/core';

import { leader } from '../shared/leader';
import { leaders } from '../shared/leaders';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): leader[] {
    console.log(leaders);
    return leaders;
  }
}
