// import { templatePost } from './templatePost.js'
// import { templateHomeSingIn } from './templateHomeSingIn.js'
import { createNewUser } from '../js/authdom.js';

export const templateNewUser = () =>{

    document.getElementById('dinamicTemplates').innerHTML =
` <div
<h1> Nuevo Usuario Patria </h1>
<form id="form-new-user">
<div >
<input id="name" type="text" class="info-new" placeholder="Nombre">
<p id="error-create">Debes ingresar tu Nombre"</p>
</div>
<div>
<input id="surname" type="text" class="info-new"" placeholder="Apellido">
<p>Debes ingresar tu Apellido"</p>
</div>
<div >
<input id="email-new-user" type="text" class="info-new"" placeholder="Email">
<p>Debes ingresar tu email"</p>
</div>
<div>
<input id="password-new.user" type="text" class="info-new"" placeholder="Contraseña 6 dígitos">
<p>Debes ingresar tu password"</p>
</div>
<div>
<input id="confirm-pass" type="text" class="info-new"" placeholder="Confirmar contraseña 6 dígitos">
</div>
<div>
<input id="country" type="text" class="info-new"" placeholder="Pais">
</div>
<div>
<input id="city" type="text" class="info-new"" placeholder="Ciudad">
</div>
<div"
<button id="create-acc" type="button" class="">Crear Cuenta </button>
</div>
</form>
</div>`

document.getElementById('create-acc').addEventListener('click', () => {
    createNewUser();

 });

//  document.getElementById('btn').addEventListener('click', () => {
//     templateHomeSingIn();
//     window.location.hash = '#/home'
//  })
}