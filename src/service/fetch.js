var url = 'https://pokemon---api.herokuapp.com/api/v1/pokemon';
var get = fetch(url);

get
	.then(response => { // вернет promise
		if (response.status < 200 || response.status > 299) {
			throw new Error(`Error code ${response.status}`);
		}
		return response.json(); // вернет promise
	})
	.then(data => console.log(data))
	.catch(error => {
		console.error(error);
		alert(`Ошибка: ${error.message}`);
	});

var options = {
  method: 'POST',
  body: JSON.stringify({value: 'Hello'}), // передается строкойб у get запроса нет Body
  header: {
	'Content-Type': 'application/json',
  },
};
var post = fetch(url, options);	

post
	.then(response => {
		if (response.status < 200 || response.status > 299) {
			throw new Error(`Error code ${response.status}`);
		}
		return response.json();
	})
	.then(data => console.log(data))
	.catch(error => {
		console.error(error);
		alert(`Ошибка: ${error.message}`);
	});

// Ошибки 1** - технические запросы, 2** - ОК, 3** - редиректы, 4** - ошибка клиента, 5** - ошибка сервера