 let username = document.querySelector("#username");
 let password = document.querySelector("#password");
 let ologin = document.querySelector("#login");
 let ologinPost = document.querySelector("#loginpost");
 ologin.onclick = () => {
   // console.log(username.value, password.value);
   // get 请求
   fetch(
       `/api/login?username=${username.value}&password=${password.value}`
     )
     .then((response) => response.text())
     .then((response) => {
       console.log(response);
     });
 };
 ologinPost.onclick = () => {
   // post 请求
   fetch(`/api/loginpost`, {
       method: "POST",
       body: JSON.stringify({
         username: username.value,
         password: password.value,
       }),

       headers: {
         "Content-Type": "application/json",
       },
     })
     .then((response) => response.text())
     .then((response) => {
       console.log(response);
     });
 };