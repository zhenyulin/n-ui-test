const express = require('@financial-times/n-ui');

const app = express({
	systemCode: 'n-ui-test',
});

app.locals.nUiConfig = {
	preset: 'discrete'
};

app.get('/__gtg', function (req, res){
	res.sendStatus(200);
});

app.get('/', (req, res) => {
	res.render('test');
});

app.listen(5000, () => {
	console.log('server started on port 5000');
});