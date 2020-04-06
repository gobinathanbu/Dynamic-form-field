import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
    selector: 'app-form-field',
    templateUrl: './form-field.component.html',
    styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {
    dynamicForm: FormGroup;
    constructor(private _fb: FormBuilder) { }

    get educationArray() {
      return this.dynamicForm.get('education') as FormArray;
    }

    ngOnInit() {
        this.dynamicForm = this._fb.group({
            name: new FormControl(''),
            age: new FormControl(''),
            phoneNumber: new FormControl(''),
            email: new FormControl(''),
            education: this._fb.array([this.educationGroup()])
        });
    }

    educationGroup() {
      return this._fb.group({
        course: new FormControl(''),
        institute: new FormControl(''),
        city: new FormControl(''),
      });
    }

    addCourse() {
      this.educationArray.push(this.educationGroup());
    }
    removeCourse(id) {
      this.educationArray.removeAt(id)
    }
    courseDetails() {
      const value = this.dynamicForm.value;
      console.log(value);
    }
}
