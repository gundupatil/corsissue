import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AuthService} from '../../auth/auth.service';
//import rxjs;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
data: Observable<Array<any>>;
  constructor(  private authService:AuthService) { }

  ngOnInit() {
  }
doSomething(){
  this.authService.getdata()
    .subscribe(data => {
       this.data = data;
       console.log(this.data);
    });
  }
   myFunction() {
    location.href = "http://localhost:8080/auth/google";
}
}
