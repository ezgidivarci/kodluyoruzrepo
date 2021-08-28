import fetch from "node-fetch";
import axios from "axios";


// async function getData(user_id){

//     const user = await axios("https://jsonplaceholder.typicode.com/users/"+ user_id);

//     const post = await axios("https://jsonplaceholder.typicode.com/posts/"+ user_id);
//     console.log(user);
//     console.log(post);
// stringify dondu
// }

// getData(3);

// async function getData(user_id){

//     const { data} = await axios("https://jsonplaceholder.typicode.com/users/"+ user_id); // bu dondu cunku data! 

//     const {post} = await axios("https://jsonplaceholder.typicode.com/posts/"+ user_id); //undefined dedi
//     console.log(data);
//     console.log(post);

// }

async function getData(user_id) {

    const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);

    const { data: post } = await axios("https://jsonplaceholder.typicode.com/posts/" + user_id);
    console.log(user);
    console.log(post);

}

getData(3);

// (async (user_id) => { //data olarak donuyor ismi degistiremeyiz. data: ... boyle yazıcaz
//     const { data:user } = await axios("https://jsonplaceholder.typicode.com/users/"+ user_id);

//     const { data:post } = await axios("https://jsonplaceholder.typicode.com/posts/"+ user_id);
//     console.log(user);
//     console.log(post);

// }) (3);

//export default getData;