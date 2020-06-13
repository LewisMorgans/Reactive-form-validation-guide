import { FeedbackPageComponent } from './feedback-page.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

describe('FeedbackPageComponent', () => {
  let component: FeedbackPageComponent;

  let _fb = new FormBuilder();
  let form = new FormGroup({})
  let _validationFactory;
  let mockRouter: Router;


  beforeEach(() => {
    _validationFactory = {
      FnameValidation: () => { null },
      CNameValidation: () => { null },
      JTitleValidation: () => { null },
      YValidation: () => { null },
      emailValidation: () => { null },
      marketingValidation: () => { null }
    }

    form = _fb.group({
      name: ['lewis']
    });

    mockRouter = {
      navigate: jasmine.createSpy('navigate'),
    } as any

    component = new FeedbackPageComponent(_fb, _validationFactory, mockRouter)

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[intialiseFormState] Should initialise the formstate to empty values', () => {

    component.feedbackForm = form;
    expect(component.feedbackForm.controls['name'].value).toContain(
      form.controls['name'].value
    );

    component.ngOnInit();
    expect(component.feedbackForm.controls['name'].value).toEqual('');

  });

  it('[Getter] Should return the form controls', () => {
    component.feedbackForm = form;
    expect(component.f).toEqual(form.controls);
  });

  it('[OnSubmit] Should call the validation function and return true, calling router.navigate', (done) => {
    component.ngOnInit();
    component.onSubmit();
    done();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['thankyou']);
  });

  it('[OnSubmit] Should call the validation function and return false, [NOT] calling router.navigate', (done) => {
    component.ngOnInit();
    component.feedbackForm.setErrors({'invalid': true});
    component.onSubmit();
    done();
    expect(mockRouter.navigate).not.toHaveBeenCalled();
  })
});
