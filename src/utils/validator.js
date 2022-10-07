export class Validator  {
  validateEmail (email) {
    return /^\S+@\S+\.\S+$/.test(email) ? '' : '*niepoprawny adres email'
  }
  validateMinLenght (value, min) {
    return value.length >= min ? '' : `*min ${min} znaków`
  }
  validateMaxLenght (value, max) {
    return value.length <= max ? '' : `*max ${max} znaków`
  }
  validateEmpty (value) {
    return value === '' ?  '' : '*pole obowiązkowe'
  }
  validatePasswordDiference (password, repeatPassword) {
    return password === repeatPassword ? '' : '*rózne hasła'
  }
}
