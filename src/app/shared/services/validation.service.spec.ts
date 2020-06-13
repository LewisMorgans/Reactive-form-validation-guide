import { ValidationService } from "./validation.service"
import { FormControl } from '@angular/forms';

describe('Validation Service unit tests', () => {

    let service: ValidationService;
    
    beforeEach(async() => {
        service = new ValidationService();
    });

    it('[FNameValidation] Should should return an object', () => {
        let control = new FormControl('le');
        expect(service.FNameValidation(control)).toEqual({ FNameValidation: 'First name must be longer than 3 letters' });
       
    });

    it('[CNameValidation] Should should return an object', () => {
        let control = new FormControl('');
        expect(service.CNameValidation(control)).toEqual({ CNameValidation: 'Company name should not be empty' });
       
    });

    it('[JTitleValidation] Should should return an object', () => {
        let control = new FormControl('');
        expect(service.JTitleValidation(control)).toEqual({ JTitleValidation: 'Job Title should not be empty' });
       
    });

    it('[YValidation] Should should return different objects depending on validation standard', () => {
        let control = new FormControl('');
        expect(service.YValidation(control)).toEqual({ YValidation: 'Years in current role should not be empty' });

        control.patchValue('111111111111111111111111111111111111111111111111111');
        expect(service.YValidation(control)).toEqual({ YValidation: 'Should be an integer >0 and <50' });

       
    });

    it('[marketingValidation] Should should return an object', () => {
        let control = new FormControl('');
        expect(service.marketingValidation(control)).toEqual({ marketingValidation: 'Please fill in comments' });
       
    });

    it('[emailValidation] Should should return an object', () => {
        let control = new FormControl('lewis');
        expect(service.emailValidation(control)).toEqual({ emailValidation: 'Email address should be a valid email address format' });
       
    });

    it('All validation methods should return null', () => {
        let control = new FormControl('lewis@gmail.com');
        expect(service.FNameValidation(control)).toEqual(null);
        expect(service.CNameValidation(control)).toEqual(null);
        expect(service.JTitleValidation(control)).toEqual(null);
        expect(service.YValidation(control)).toEqual(null);
        expect(service.marketingValidation(control)).toEqual(null);
        expect(service.emailValidation(control)).toEqual(null);
    })
})