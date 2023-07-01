let apiUser = "http://localhost:3000/user";
function Login(){
    getUser(handleLogin);
}
function getUser(callback){
    fetch(apiUser).then(function (res){
        return res.json().then(callback);
    });
}
function handleLogin(data){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    data.forEach((data) =>{
        if(data.email == username && data.password == password) {
            alert("dang nhap thanh cong");
            window.location.href = "/home"
        }
    });

}
