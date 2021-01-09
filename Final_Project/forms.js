document.getElementById('registration').addEventListener('submit', function(event) {
    event.preventDefault();

    let errors = {};
    let form = event.target;
    

    //username 
    let username = form.querySelector('[name="username"]').value;
    if (username.length < 3) {
        errors.username = "შეიყვანეთ მინიმუმ სამი სიმბოლო";
    }

    //Passwords
    let password = form.querySelector('[name="password"]').value;
    let password2 = form.querySelector('[name="password2"]').value;

    
    
    if (password.length < 8) {
        errors.password = "შეიყვანეთ მინიმუმ 8 სიმბოლო";
    }
    if (password != password2) {
        errors.password = "პაროლი არ დაემთხვა";
    }

    
    
    //Checkbox
    let agree = form.querySelector('[name="agree"]').checked;
    if (!agree) {
        errors.agree = "დაეთანხმეთ საიტის წესებს";
    }


    // Errors
    form.querySelectorAll('.error-div').forEach(item => {
        item.textContent = ' ';
    });
    for (let name in errors) {
        let errorPlaceholder = document.getElementById('error_' + name);
        if (errorPlaceholder) {
            errorPlaceholder.textContent = errors[name];
        }

    }


    // გაგზავნა 

    
    if (Object.keys(errors).length === 0) {
        form.submit();
    }

    console.log(errors);

});