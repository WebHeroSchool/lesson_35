
let href = document.location.href;
login = 'viktoriahamova';
const url = function () {
  let user = href.split('=');
  if (user[1]) {
    username = user[1];
  } else {
    username = login
  };
  return 'https://api.github.com/users/' + username;
}
let link = url();

let rez = async function() {
 let response = await fetch(link);
if (response.ok) {
  json = await response.json();

  let name = document.createElement("h1");
  name.innerHTML = json.name;
  document.body.append(name);

  let img = new Image();
  img.src = json.avatar_url;
  document.body.append(img);

  let bio = document.createElement("p");
  bio.innerHTML = json.bio;
  document.body.append(bio);
} else {
  let element = document.createElement("h1");
  element.innerHTML = "<h1>User is not found </h1>";
  document.body.append(element);
}
}();
