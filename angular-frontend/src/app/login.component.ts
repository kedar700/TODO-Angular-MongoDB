import { Component, Input, OnInit ,Output, EventEmitter} from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'todo-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    show: boolean = false;
    @Output() messageEvent = new EventEmitter<boolean>();

    constructor(
        private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        // this.authenticationService.logout();

        // get return url from route parameters or default to '/'
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        if(this.f.username.value === "user" && this.f.password.value === "password" ) {
            this.show = true;
            this.messageEvent.emit(this.show);
        } else {
            this.error = "Please check the username and password";
            this.loading = false;
        }


    }
}