//////// POST API ///////


// var form = document.getElementById('form')
// form.addEventListener('submit',function(e){
//     e.preventDefault()
//     var name = document.getElementById("name")
//     var body = document.getElementById("body")
//     var id = document.getElementById("id")

//     fetch("https://jsonplaceholder.typicode.com/posts",{
//         method: 'POST',
//         headers: {"Content-Type" : "application/json; charset=UTF-8"},
//         body: JSON.stringify({title: name.value,body: body.value,id:id.value})})
//     .then(response=>{
//         return response.json()
//     }).then(data=>{
//         return console.log(data);
//     })
// })


//////// GET API ///////


// function fetchData(){
//     fetch('https://reqres.in/api/users')
//         .then(response=> {
//             return response.json();
//         })
//         .then(data=>{
//             const html = data.data.map(user => {
//                 return `<div class="accordion-item">
//                 <h2 class="accordion-header">
//                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#user-${user.id}">
//                         ${user.first_name} ${user.last_name}
//                     </button>
//                 </h2>
//                 <div id="user-${user.id}" class="accordion-collapse collapse" data-bs-parent="#userList">
//                     <div class="accordion-body d-f flex-direction-column">
//                         <div>
//                         <img src="${user.avatar}" alt="${user.first_name}">
//                         </div>
//                         <h6>
//                         ${user.email}
//                         </h6>
//                     </div>
//                 </div>
//             </div>`;
//             }).join('')
//             document.querySelector("#userList").insertAdjacentHTML('afterbegin',html);
//         })
//         .catch(error=>{
//             console.log(error);
//         });
// }
// fetchData();