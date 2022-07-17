import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  public age = 15;
  public tangTuoi() {
    this.age++;
  }
  constructor() { 

  }
}
