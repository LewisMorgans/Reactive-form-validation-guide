import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ValidationService } from 'src/app/shared/services/validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.scss']
})
export class FeedbackPageComponent implements OnInit {

  public feedbackForm: FormGroup;
  public submitted = false;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _validationFactory: ValidationService,
    private readonly _router: Router) { }

  ngOnInit(): void {
    this.intialiseFormState();
  }

  private intialiseFormState(): void {

    this.feedbackForm = this._fb.group({
      name: ['', this._validationFactory.FNameValidation],
      companyName: ['', this._validationFactory.CNameValidation],
      jobTitle: ['', this._validationFactory.JTitleValidation],
      years: ['', this._validationFactory.YValidation],
      email: ['', this._validationFactory.emailValidation],
      marketing: ['', this._validationFactory.marketingValidation]
    })
  }

  get f() {
    return this.feedbackForm.controls;
  }

  public onSubmit(): void {
    this.submitted = true;

    if (this.validationCheck()) {
      this._router.navigate(['thankyou'])
    }
  }

  private validationCheck(): boolean {

    if (this.feedbackForm.valid) {
      sessionStorage.setItem('companyName', this.f.companyName.value);
      for (const x in this.f) {
        console.log(this.f[x].value);
      };
      return true;
    } else return false;

  }

}
