import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  if (password?.pristine || confirmPassword?.pristine) {
    return null;
  } else if (
    password &&
    confirmPassword &&
    password?.value !== confirmPassword?.value
  ) {
    return { missMatch: true };
  } else {
    return null;
  }
};
