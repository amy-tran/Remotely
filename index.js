let user_image = document.querySelector("#user_image")
let user_name = document.querySelector("#user_name")
let user = document.querySelector("#user")

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    user.style.display = "block";
    user_image.src =  profile.getImageUrl();
    user_name.innerHTML = profile.getName();
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    user.style.display = "none";
});
}