document.getElementById('form').addEventListener('submit', function(event){
event.preventDefault();

if (validateform()){
    alert("form submitted");
}
});


function validateform(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;
    let phone = document.getElementById("phone").value;

    if (name.trim()===""){
        alert("name is required");
        return false;
    }
    if (email.trim()===""){
        alert("email required");
        return false;
    }
    if (phone.trim()===""){
        alert("Enter valid phone");
        return false;
    }
    if (dob ===""){
        alert("Date required");
        return false;
    }
    return true;
}
