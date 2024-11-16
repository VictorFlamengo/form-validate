const email = document.getElementById('email')
    const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const spansemail = document.getElementById('required1');
    const senha = document.getElementById('senha');
    const spansenha = document.getElementById('required2');
    const iconeemail = document.getElementById('icon');
    const iconesenha = document.getElementById('icon2');

    function setErrorsenha(index){
        senha.style.border = "2px solid red";
        spansenha.style.display = "block";
    }

    

    function validateSenha(){
        if(senha.value.length < 3){
            setErrorsenha();
            iconesenha.style.display = "none";
        }
        else{
            senha.style.border = "2px solid green";
            spansenha.style.display = "none";
            iconesenha.style.display = "block";
        }
        
    }

    //------------------------------------------------------------------------//

    function setErroremail(index){
        email.style.border = "2px solid red";
        spansemail.style.display = "block";
    }

    function validateEmail(){
        if(emailregex.test(email.value)){
            email.style.border = "2px solid green";
            spansemail.style.display = "none";
            iconeemail.style.display = "block";
        }
        else{
            setErroremail();
            iconeemail.style.display = "none";
        }
    }