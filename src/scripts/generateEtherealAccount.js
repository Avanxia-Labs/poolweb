const nodemailer = require('nodemailer');

console.log('Generating Ethereal Account');


nodemailer.createTestAccount((err, account) => {
  if (err) {
    console.error('Error al crear cuenta de prueba', err);
    return;
  }

  console.log('Cuenta de prueba creada:');
  console.log('Usuario:', account.user);
  console.log('Contraseña:', account.pass);
});
