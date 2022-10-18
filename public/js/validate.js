function testBox1(form){
    Ctrl = form.name; 

    if (Ctrl.value.length < 3) {
        validatePrompt(Ctrl, "El nombre debe tener al menos 3 caracteres")

        return (false);
    }else{
        return (true); 
    }
}
function testBox2(form){
    Ctrl = form.email; 

    if (Ctrl.value ===  "" || Ctrl.value.indexOf('@', 0) == -1) {
        validatePrompt(Ctrl, "Entrar un Email valido")

        return (false);
    }else{
        return (true); 
    }
}
function testBox3(form){
    Ctrl = form.message; 
    if (Ctrl.value ===  "" ) {
        validatePrompt(Ctrl, "No puedes dejar el mensaje vacío")
        return (false);
    }else{
        return (true); 
    }
}

function runSubmit (form, button){
    if(!testBox1(form)) return; 
    if(!testBox2(form)) return; 
    if(!testBox3(form)) return; 

    alert("Todos los campos OK")

    return; 
}


function validatePrompt (Ctrl, PromptStr){
    alert (PromptStr)

    Ctrl.focus();

    return; 
}