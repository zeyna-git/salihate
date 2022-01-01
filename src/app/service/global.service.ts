import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  host="http://localhost/sunuka.com/backend_php/"
  // host="https://api.h24code.com/sunuka_backend/"
  user={idUser:1}
  constructor() { }
}
