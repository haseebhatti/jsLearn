var ck_name = /^[A-Za-z0-9 ]{3,20}$/
var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
var ck_username = /^[A-Za-z0-9_]{1,20}$/
var ck_ccNumber = /^4[0-9]{12}(?:[0-9]{3})?$/

function validate (form) {
  var name = form.name.value
  var email = form.email.value
  var username = form.username.value
  var ccNumber = form.ccNumber.value

  var errors = []

  if (!ck_name.test(name)) {
    errors[errors.length] = 'You have a valid Name .'
  }
  if (!ck_email.test(email)) {
    errors[errors.length] = 'invalid email';}

  return false
}
