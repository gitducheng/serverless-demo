const express = require('express');
const app = express();
const {NodeVM} = require('vm2');
const dbData = require('./db')

// const vm = new NodeVM({
//     require: {
//         external: true,
//     },
//     timeout: 3000,
// });
console.log(dbData)
// vm.run(`
//     var request = require('request');

//     request('http://www.baidu.com', function (error, response, body) {
//         console.error(error);

//         if (!error && response.statusCode == 200) {
//             console.log(body) // Show the HTML for the Google homepage.
//         }
//     })
// `, 'a.js');

const runFun = (response, code) => {
    const vm = new NodeVM({
        require: {
            external: true,
        },
        sandbox: {response},
        timeout: 3000,
    });

    const code1 = "response.sendFile(__dirname + '/index.html')";

    // const sandbox = { console,response,__dirname };
    // const hhh = vm.createContext(sandbox);

    const data = vm.run(code, 'app2.js');
}


app.get('/dcc', function (_, response) {
    const host_name = _.headers.host.split(':')[0]
    console.log(dbData[host_name].code);
    runFun(response, dbData[host_name].code);
})

app.get('*', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});
  
const listener = app.listen(64754, function () {
    console.log('Your app is listening on port localhost:' + listener.address().port);
});
