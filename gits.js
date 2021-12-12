let url = window.location.href;

let date = new Date();

let req = (url) =>  {
	let user = url.split('=');
	let name = user[1];
	if (name == undefined) {
			name = 'viktoriahamova'
	}
	return name;
}



/*const getUrl = new Promise((resolve, reject) =>{
	setTimeout(() => url ? resolve(url) ? reject('url not set'), 3000)
});*/



fetch(`https://api.github.com/users/${req(url)}`)
    .then(res => res.json())
    .then(json => {
     let name = document.createElement("h1");
		 if (json.name != null) {
								name.innerHTML = json.name;
						} else {
								name.innerHTML = 'User information unavailable';
						}
      //name.innerHTML = json.name;
      document.body.append(name);
      name.addEventListener("click", () => window.location = json.html_url);
      name.title = json.login;
			name.style.cursor = "pointer";

      let bio = document.createElement("p");
			if (json.bio != null) {
                bio.innerHTML = json.bio;
            } else {
                bio.innerHTML = 'User information unavailable';
            }
      //bio.innerHTML = json.bio;
      document.body.append(bio);

			let img = new Image();
			if (json.avatar_url != null) {
                img.src = json.avatar_url;
            } else {
                img.innerHTML = 'User information unavailable';
            }
			 //img.src = json.avatar_url;
			 document.body.append(img);
      })
    .catch(err => console.error(err));


		const getDate = new Promise((resolve, reject) => {
			setTimeout(() => date ? resolve(date) : reject('Date not set'), 3000);
		});
		getDate
		.then(date => {
			 document.body.append(date);
		})

