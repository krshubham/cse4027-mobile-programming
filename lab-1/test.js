const loginForm = document.getElementById('login-form');
    loginForm.onsubmit = (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;
        if(username !== 'shubham' || email !== 'kumarshubham347@gmail.com' || password !== 'shubhi'){
            alert('The details are incorrect');
            return false;
        }
        else{
            window.location.pathname = '/lab-1/test.html';
            return false;
        }
        return false;
    }