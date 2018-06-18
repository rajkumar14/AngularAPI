import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ UsersService ]
})
export class ContactComponent implements OnInit {
  register;
  userDetails = new Array();
  testForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    number : new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    address : new FormControl('', [Validators.required])
  });
  constructor(private userService: UsersService, private toastr: ToastrService) {
    // this.getUser();

   }

  ngOnInit() {
    console.log(this.testForm);
    this.register = {
      username: '',
      address: '',
      mobile: '',
      email: ''
    };
  }

  getUser() {
    this.userService.getUser().subscribe(
      response => {
        this.userDetails = response;
        console.log(response);
    });
  }
  registerUser() {
    this.userService.registerNewUser(this.register).subscribe(
    response => {
      alert('User ' + this.register.name + 'has been created');
    },
    error => {
      console.log('error', error);

    }
  );
  }
  // showForEdit(emp: UsersService) {
  //   this.userService.selectedStudent = Object.assign({}, emp);
  // }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.userService.deleteStudent(id)
      .subscribe(x => {
        this.userService.getUser();
        this.toastr.warning('Deleted Successfully', 'Employee Register');
      });
    }
  }
  // tslint:disable-next-line:member-ordering
submit() {
  console.log(this.testForm);
  if ( this.testForm.valid) {
    alert('valid');
    console.log(this.testForm.value);
  } else {
    alert('invalid');
  }
}

}
