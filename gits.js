let response = fetch('https://api.github.com/users/6thSence');
if (response.ok) {
  console.log('hello!');
} else {
    console.log('error lol');
}
