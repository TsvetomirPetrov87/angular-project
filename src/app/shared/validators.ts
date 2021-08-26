import { AbstractControl, ValidationErrors } from "@angular/forms"

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    if(!control.value) {
        return null;
    }
    
    return /^[a-zA-Z0-9\.-]{3,}@(gmail|yahoo|outlook|abv|jabse)\.(com|bg)$/.test(control.value) ? null : {
        invalidEmail: true
    }
}

export function checkForTheSameValue() {
    
}