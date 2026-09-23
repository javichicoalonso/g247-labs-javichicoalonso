// FizzBuzz — print 1..n. Multiples of 3 become "Fizz",
// multiples of 5 become "Buzz", multiples of both become "FizzBuzz".
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
 
// findMax — return the largest value in the array. No Math.max.
// Return undefined for an empty array.
function findMax(numbers) {
  if (numbers.length < 1) {
    return undefined;
  }
  let maximo = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maximo) {
      maximo = numbers[i];
    }
  }
  return maximo;
}
 
// isPalindrome — ignore case, spaces, and punctuation.
// Refactor at least one function above into an arrow function.
const isPalindrome = (str) => {
  const limpio = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const alReves = limpio.split("").reverse().join("");
  return limpio === alReves;
};
 
// Basic email shape validation. Return true or false.
function validateEmail(email) {
  const caracteres = email.split("");
  let validacion = 0;
 
  for (let i = 0; i < caracteres.length; i++) {
    if (caracteres[i] === "@") {
      validacion += 1;
    }
    if (caracteres[i] === ".") {
      validacion += 1;
    }
  }
 
  if (validacion === 2) {
    return true;
  } else {
    return false;
  }
}
 
// At least 8 characters, one letter, and one digit.
function validatePassword(password) {
  const contrasena = password.split("");
  let tieneLetra = false;
  let tieneDigito = false;
 
  for (let i = 0; i < contrasena.length; i++) {
    if (/[a-zA-Z]/.test(contrasena[i])) {
      tieneLetra = true;
    }
    if (/[0-9]/.test(contrasena[i])) {
      tieneDigito = true;
    }
  }
 
  if (contrasena.length >= 8 && tieneLetra && tieneDigito) {
    return true;
  } else {
    return false;
  }
}
 
// Return { valid: true, errors: [] } or
// { valid: false, errors: ["...", "..."] }.


function unirTextos(lista) {
  let texto = lista[0];
  for (let i = 1; i < lista.length; i++) {
    if (i === lista.length - 1) {
      texto = texto + " y " + lista[i];
    } else {
      texto = texto + ", " + lista[i];
    }
  }
  return texto;
}

function validateLoginForm(email, password) {
  const errors = [];

  const faltaCorreo = [];
  if (!email.includes("@")) {
    faltaCorreo.push("una arroba");
  }
  if (!email.includes(".")) {
    faltaCorreo.push("un punto");
  }

  let tieneLetra = false;
  let tieneDigito = false;

  for (let i = 0; i < password.length; i++) {
    if (/[a-zA-Z]/.test(password[i])) {
      tieneLetra = true;
    }
    if (/[0-9]/.test(password[i])) {
      tieneDigito = true;
    }
  }

  const faltaPassword = [];
  if (password.length < 8) {
    faltaPassword.push("8 caracteres");
  }
  if (!tieneLetra) {
    faltaPassword.push("una letra");
  }
  if (!tieneDigito) {
    faltaPassword.push("un número");
  }

  if (faltaCorreo.length > 0) {
    errors.push("El correo necesita " + unirTextos(faltaCorreo) + ".");
  }
  if (faltaPassword.length > 0) {
    errors.push("La contraseña necesita " + unirTextos(faltaPassword) + ".");
  }

  return {
    valid: errors.length === 0,
    errors: errors
  };
}


fizzBuzz(15);

console.assert(findMax([3, 7, 2, 9, 1]) === 9, "findMax basic");
console.assert(findMax([-5, -2, -9]) === -2, "findMax negatives");
console.assert(findMax([]) === undefined, "findMax empty");

console.assert(isPalindrome("racecar") === true, "isPalindrome basic");
console.assert(isPalindrome("A man, a plan, a canal: Panama") === true, "isPalindrome punctuation");
console.assert(isPalindrome("hello") === false, "isPalindrome false case");

console.assert(validateEmail("fan@riverside.fc") === true, "email valid");
console.assert(validateEmail("fan@riversidefc") === false, "email needs a dot");
console.assert(validateEmail("fanriverside.fc") === false, "email needs an @");

console.assert(validatePassword("Season2026") === true, "password ok");
console.assert(validatePassword("short1") === false, "password too short");
console.assert(validatePassword("allletters") === false, "password needs a digit");

console.assert(validateLoginForm("fan@riverside.fc", "Season2026").valid === true, "form valid");
console.assert(validateLoginForm("nope", "x").errors.length === 2, "form reports both errors")