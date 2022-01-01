import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  host="http://192.168.1.10/sunuka.com/backend_php/"
  // host="https://api.h24code.com/sunuka_backend/"
  constructor() { }
}
