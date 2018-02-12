const express = require('@financial-times/n-ui');
const helpers = require('../views/helpers');

const app = express({
	systemCode: 'n-ui-test',
	withFlags: true,
	withHandlebars: true,
	withNavigation: true,
	hasHeadCss: true,
	hasNUiBundle: true,
	helpers
});

app.locals.nUiConfig = {
	preset: 'discrete'
};

app.get('/__gtg', function (req, res){
	res.sendStatus(200);
});

app.get('/', (req, res) => {
	res.render('test', {
		someArray: [1,2],
		someValue: 1
	});
});

app.listen(5000, () => {
	console.log('server started on port 5000');
});