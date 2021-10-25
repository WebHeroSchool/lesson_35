let response = fetch('https://api.github.com/users/6thSence');
if (response.ok) {
//  let json = response.json();
  console.log('hello');
} else {
    console.log('error lol');
}
