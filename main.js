const url = "https://api.thecatapi.com/v1/images/search?limit=10";
const api_key = "live_6jVkCqVhWG1iWxvgaJ9zNiJMwcpY5T016M0WzhNjlfVRp796FAfxzMMYRHcOhCE4"
const url2 = "https://randomuser.me/api";


fetch(url,{headers: {
    'x-api-key': api_key
}})
.then(function(response){
    return response.json();
})
.then(function(myJson){
    let source = myJson[0].url;
    let img = document.querySelector("img");
    img.src = source;
})

fetch(url2)
.then(function(response){
    return response.json();
})
.then(function(myJson){
    let userData = myJson.results[0];
    let p = document.querySelector("p");
    p.innerText = "This is " + userData.name.first;
})