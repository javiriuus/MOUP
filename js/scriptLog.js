var count = 0;


$(document).ready(function() {
  
  var animating = false,
      submitPhase1 = 1100,
      submitPhase2 = 400,
      logoutPhase1 = 800,
      $login = $(".login"),
      $register = $(".login_reg"),
      $app = $(".app");
  
  function ripple(elem, e) {
    $(".ripple").remove();
    var elTop = elem.offset().top,
        elLeft = elem.offset().left,
        x = e.pageX - elLeft,
        y = e.pageY - elTop;
    var $ripple = $("<div class='ripple'></div>");
    $ripple.css({top: y, left: x});
    elem.append($ripple);
  };

});

function createCookie() { //Funcion para registrarse
  var email = document.register.email.value;
  var password = document.register.password.value;
  var confirm_pass = document.register.confirm_pass.value;

  var lista = document.cookie.split(";");

  if(password!=confirm_pass){
    alert("Las contraseñas no coinciden");
    document.getElementById("register").reset();
    window.open('#', "_self");
    return false;
  }

  for (i in lista) {
      if (lista[i].search(email) > -1) { //si encontramos el usuario paramos de buscar
          alert("Ese nombre de usuario ya existe");
          document.getElementById("register").reset();
          window.open('#', "_self");
          return false;
      }
  }
  //si salimos del bucle significa que no hemos encontrado ninguna coincidencia por lo que podemos crear el usuario
  document.cookie = "email" + count + "=" + email + ";"
  document.cookie = "password" + count + "=" + password + ";"
  document.getElementById("register").reset();
  count = count + 1;
  window.open("Login.html", "_self");

  return false;
}


function iniciar(){ //Función para iniciar sesion
  var email = document.signIn.email.value;
  var password = document.signIn.password.value;
  var lista = document.cookie.split(";");
  var busquedaE = -1;
  var busquedaP = -1;

  for (i in lista) {
      if (lista[i]==email) {
          busquedaE = 1;
          
      }
      if (lista[i] == password) {
          busquedaP = 1;
      }
  }
  if (busquedaE > -1 && busquedaP > -1) {   
    document.getElementById("signIn").reset();
    window.open("index.html", "_self");
    return false;
  } else {
    alert('busquedaE: ' + busquedaE + '     busquedaP: ' + busquedaP);
    alert("El usuario o la contraseña son incorrectos");
    return false;
  }

}
