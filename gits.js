let url = window.location.href;
let req = (url) =>  {
	let user = url.split('=');
	let name = user[1];
	if (name == undefined) {
			name = 'viktoriahamova'
	}
	return name;
}

fetch(`https://api.github.com/users/${req(url)}`)
    .then(res => res.json())
    .then(json => {
     let name = document.createElement("h1");
      name.innerHTML = json.name;
      document.body.append(name);
      name.addEventListener("click", () => window.location = json.html_url);
      name.title = json.login;

     let img = new Image();
      img.src = json.avatar_url;
      document.body.append(img);

      let bio = document.createElement("p");
      bio.innerHTML = json.bio;
      document.body.append(bio);
      })
    .catch(err => console.error(err));
