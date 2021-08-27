import { AbstractControl, ValidationErrors } from "@angular/forms"

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
        return null;
    }

    return /^[a-zA-Z0-9\.-]{3,}@[a-zA-Z0-9]{3,}\.[a-zA-Z0-9]{2,3}$/.test(control.value) ? null : {
        invalidEmail: true
    }
}

export function checkForTheSameValue() {

}