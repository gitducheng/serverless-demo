const express = require('express');
const app = express();
const vm = require('vm');

const runFun = (response) => {
    const code = 'console.log("hello world!")';
    const code1 = "response.sendFile(__dirname + '/index.html')";

    const sandbox = { console,response,__dirname };
    const hhh = vm.createContext(sandbox);

    const data = vm.runInNewContext(code1, hhh);
}


app.get('/dcc', function (_, response) {
    console.log(_.headers.host);
    runFun(response);
    // response.json({
    //   username: 'jufei',
    //   age: 20
    // })
})

app.get('*', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});
  
const listener = app.listen(64754, function () {
    console.log('Your app is listening on port localhost:' + listener.address().port);
});
