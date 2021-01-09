function getUsers() {

    let req = new XMLHttpRequest();
    req.open('GET', 'https://reqres.in/api/users?page=1');

    req.onload = function() {
        if(this.status == 200){
            var response = this.responseText;
            var responseData = JSON.parse(response);
            
            console.log(responseData);

            var momxmareblebi = document.getElementById('momxmareblebi');

            responseData.data.forEach(user => {
                console.log(user);

                var div = document.createElement('div');
                div.classList.add('momxmarebeli');
                var peamail = document.createElement('p');
                var img = document.createElement('img');
                var name = document.createElement('h3');

                img.src = user.avatar;
                name.textContent = user.first_name + ' ' + user.last_name;
                peamail.textContent = user.email;

                div.appendChild(img);
                div.appendChild(name);
                div.appendChild(peamail);

                momxmareblebi.appendChild(div);

                


                

            });

        


            
            
            

        }
        else {
            var output = '<h2>'+ this.status+'</h2>'+'<h3>Page Not Found</h3>';

            document.getElementById('api').innerHTML = output;
        }
    };

    req.send();           
}

getUsers();



