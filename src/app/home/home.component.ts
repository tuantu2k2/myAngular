import { Component, OnInit } from '@angular/core';
import { CommentService } from '../Services/comment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public vehicles = ['car','bus', 'bike'];
  public name = 'HUy'
  public age = 15;
  constructor(private comment:CommentService) {
    this.age = comment.age;
   }

  ngOnInit(): void {
  }

  public tangTuoi(){
    this.comment.age++;
    this.age = this.comment.age;
  }

}
