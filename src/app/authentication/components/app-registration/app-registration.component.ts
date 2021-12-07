import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BackendService} from "../../../root-browser/services/backend.service";

@Component({
  selector: 'app-app-registration',
  templateUrl: './app-registration.component.html',
  styleUrls: ['./app-registration.component.scss']
})
export class AppRegistrationComponent implements OnInit {

  registrationForm = new FormGroup({
    Email: new FormControl('', [
      Validators.email, Validators.required
    ]),

    Password: new FormControl('', [
      Validators.minLength(8),
    ]),

    FirstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    LastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),

  })


  constructor(private backendService: BackendService) {

  }

  ngOnInit(): void {

  }

  onRegistrationFormSubmit(){
    if(this.registrationForm.valid){
      let payload: any = this.registrationForm.getRawValue();
      this.backendService.register(payload).subscribe((response: any) => {
        console.log(response);
      })
    }
  }

}
