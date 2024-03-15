// const date = new Date();
// console.log(date.getTime()); //кількість мілісекунд, що минула з півночі 1 січня 1970 року

// console.log(Date.now()); //oсновна ідея застосування Date.now() полягає у вимірюванні часу, розрахунку інтервалів тощо.


//TODO: Проміси

//==================================

// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// console.log(promise); // Об'єкт промісу

// ?Registering promise callbacks
// promise.then(
//   value => {
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   error => {
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

//==================================



//==================================

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value); // 30
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally");
//   });
  
//==================================

//TODO: Обробка множинних промісів

//==================================

//?Promise.all()
// const p1 = Promise.resolve(1);
// const p2 = Promise.reject("Rejected promise 2");
// const p3 = Promise.resolve(3);

// Promise.all([p1, p2, p3])
// 	.then(values => console.log(values))
// 	.catch(error => console.log(error)); // "Rejected promise 2"
//? Promise.all виконається лише тоді, коли всі передані йому проміси успішно виконаються, або якщо один з них буде відхилено.


//==================================

//==================================

//?Promise.allSettled()
// const p1 = Promise.resolve(1);
// const p2 = Promise.reject("Rejected promise 2");
// const p3 = Promise.resolve(3);

// Promise.allSettled([p1, p2, p3])
// 	.then(values => console.log(values));
	// [
	//   { status: "fulfilled", value: 1}, 
  //   { status: "rejected", value: "Rejected promise 2"},
  //   { status: "fulfilled", value: 3}
  // ]
  //?Відмінність від Promise.all полягає в тому, що метод Promise.allSettled() чекає виконання всіх промісів незалежно від того, чи були деякі або навіть всі проміси відхилені.

//==================================

//==================================

//? Promise.race()
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(2), 2000);
// });

// Promise.race([p1, p2])
// 	.then(value => console.log(value))   //1
// 	.catch(error => console.log(error));

//?Метод Promise.race приймає масив промісів і повертає "найшвидший", тобто перший виконаний або відхилений проміс з переданих, разом зі значенням або причиною його відхилення.

//==================================