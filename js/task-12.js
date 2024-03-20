//TODO: ОНОВЛЕННЯ ІНТЕРФЕЙСУ

// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//   fetchUsers()
//     .then((users) => renderUsers(users))
//     .catch((error) => console.log(error));
// });

// function fetchUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users").then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function renderUsers(users) {
//   const markup = users
//     .map((user) => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join("");
//   userList.insertAdjacentHTML("beforeend", markup);
// }


//TODO: CRUD.ЧИТАННЯ.GET-запити

// fetch("<https://jsonplaceholder.typicode.com/users>")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((users) => console.log(users))
//   .catch((error) => console.log(error));
//?Чомусь не працює
//!ви не можете насправді відправити пост-запит по цьому урл, це лише приклад.


//TODO: CRUD.СТВОРЕННЯ.POST-запити

// const postToAdd = {
//   title: "CRUD",
//   body: "CRUD is awesome!",
// };

// const options = {
//   method: "POST",
//   body: JSON.stringify(postToAdd),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
// };

// fetch("<https://jsonplaceholder.typicode.com/posts>", options)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(post => console.log(post))
//   .catch(error => console.log(error));
//?Чомусь не працює
//!ви не можете насправді відправити пост-запит по цьому урл, це лише приклад.



//TODO: CRUD.ОНОВЛЕННЯ.PATCH-PUT-запити

// Change value of id property to update different post
// const postToUpdate = {
//   id: 1,
//   body: "CRUD is really awesome!",
// };

// const options = {
//   method: "PATCH",
//   body: JSON.stringify(postToUpdate),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(post => console.log(post))
//   .catch(error => console.log("ERROR:", error));

//TODO: CRUD.ВИДАЛЕННЯ.DELETE-запити

const postIdToDelete = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//   method: "DELETE",
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((deletedPost) => console.log(deletedPost))
//   .catch(error => console.log("Error:", error));



