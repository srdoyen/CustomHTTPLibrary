const http = new easyHTTP();

//GET Posts
// const posts = http.get("https://jsonplaceholder.typicode.com/posts", function(
//   error,
//   response
// ) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// });

//GET Single Post
// const posts = http.get("https://jsonplaceholder.typicode.com/posts/1", function(
//   error,
//   response
// ) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// });

//POST Posts
//Create data
const data = { title: "Custom Post", body: "This is custom" };

// http.post("https://jsonplaceholder.typicode.com/posts", data, function(
//   error,
//   response
// ) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// });

//PUT Posts
//Create data

// http.post("https://jsonplaceholder.typicode.com/posts", data, function(
//   error,
//   response
// ) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// });

//Update POST
// http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

http.delete("https://jsonplaceholder.typicode.com/posts/1", function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
