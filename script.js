const signInButton = document.getElementById('signin')
const form = document.querySelector('form')

signInButton.addEventListener('click', function (event) {
    // Hämta från input


    event.preventDefault()
    checkIfsMatch(form['email'].value, form['password'].value)
})

function checkIfsMatch(email, password) {
    if (email == userCredential.email && password == userCredential.password) {
        document.cookie = 'auth=true'
        window.location.href = '/dashborad.html'
        console.log('Signed up');
    } else {
        console.log('Sign up failed');
    }
}

function checkIfUserIsLoggedIn() {
    if (document.cookie == "auth=true") {
        window.location.href = '/dashboard.html'
    } else {
        return
    }
}
checkIfUserIsLoggedIn()

let userCredential = {
    name: 'albn_johanssn',
    email: 'albin.johansson0302@gmail.com',
    password: 'mySecretPassword',
}

function checkIfUserIsLoggedIn() {
    console.log(document.cookie);
}

checkIfUserIsLoggedIn()
































/* if (username == '') {
    alert('Please enter your name!')
} elseif(!letters.test(username))
{
    alert('Name field require only alphabetical characters!')
} elseif(email == '')
{
    alert('Please enter your email address!')
} elseif(!filter.test(email))
{
    alert('Invalid email!')
} elseif(password == '')
{
    alert('Please enter your password!')
} elseif(!password_expression.test(password))
{
    alert('Please use more variations in your password (uppercase, lowercase, special characters and numbers)')
} elseif(password != correct_password)
{
    alert('Password not matched!');
}
elseif(document.getElementById("passwrod").value.length < 6)
{
    alert('Password minimum length is 6!');
}
elseif(document.getElementById("password").value.length > 32)
{
    alert('Password max length is 32!');
} */