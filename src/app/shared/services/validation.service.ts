import { Injectable } from "@angular/core";
import { AbstractControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class ValidationService {

    public FNameValidation(control: AbstractControl): { [key: string]: any } | null {

        if (control.value.length < 3) {
            return { FNameValidation: 'First name must be longer than 3 letters' }
        }
        return null;
    };

    public CNameValidation(control: AbstractControl): { [key: string]: any } | null {

        if (control.value.length < 1) {
            return { CNameValidation: 'Company name should not be empty' }
        }
        return null;
    }

    public JTitleValidation(control: AbstractControl): { [key: string]: any } | null {

        if (control.value.length < 1) {
            return { JTitleValidation: 'Job Title should not be empty' }
        }
        return null;
    }

    public YValidation(control: AbstractControl): { [key: string]: any } | null {
        if (control.value.length < 1) {
            return { YValidation: 'Years in current role should not be empty' }
        } else if (control.value.length > 50) {
            return { YValidation: 'Should be an integer >0 and <50' }
        }

        return null;
    };

    public marketingValidation(control: AbstractControl): { [key: string]: any } | null {

        if (control.value.length < 1) {
            return { marketingValidation: 'Please fill in comments' }
        }
        return null;
    }

    public emailValidation(control: AbstractControl): { [key: string]: any } | null {

        const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');

        if (!regex.test(control.value)) {
            return { emailValidation: 'Email address should be a valid email address format' }
        }
        return null;
    }

}