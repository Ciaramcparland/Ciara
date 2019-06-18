


let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let message = document.getElementById("message");
let submit = document.getElementById("submit");
function onChange(event) {
    let valid = firstName.value.length && lastName.value.length && message.value.length;
    console.log(valid,valid>0);
    submit.disabled=valid==0;
}
firstName.addEventListener("change", onChange);
submit.disabled = true;
lastName.addEventListener("change", onChange);
message.addEventListener("change", onChange);


