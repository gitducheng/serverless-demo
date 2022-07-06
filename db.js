const sites = {
    localhost:{
        code: `var request = require('request');
        request('http://www.baidu.com', function (error, res, body) {
            if (!error && res.statusCode == 200) {
                response.send(body)
            }
        })`
        // code: "response.send('qwer')",
    }
}

module.exports = sites;