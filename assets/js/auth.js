const Express = require('express'); 
const { URLSearchParams } = require('url'); 
const axios = require('axios'); // Import Axios
const path = require('path'); // Import path
const bodyParser = require('body-parser'); 
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const client_id = '980875637562703952'
const client_secret = 'CMSXHkva6qA5DRpJimfhis6oimzjZPtQ'

const app = Express()
const port = 80 //idk which port to use

function make_config(auth) {
    data = {
        headers: { //header of data
            "authorization": `Bearer ${auth}`
        }
    }
    return data;
}

app.use(Express.urlencoded({extended: false})) //send payloads
app.use(Express.json()) //convert to json
app.use(bodyParser.text()) //json readable

app.get('/', (req, res) => {

    res.sendFile(path.join(___dirname + '/index.html'))

})

let _new = new URLSearchParams()

_new.append('client_id', client_id);
_new.append('client_secret', client_secret); 
_new.append('grant_type', 'authorization_code'); 
_new.append('redirect_uri', `https://bloxy.digital${port}`); // redirect on login
_new.append('scope', 'identify'); // info
_new.append('code', req.body)

fetch('https://discord.com/api/oauth2/token', { method: "POST", body: data_1 }).then(response => response.json()).then(data => { // request json payload
axios.get("https://discord.com/api/users/@me", make_config(data.access_token)).then(response => { 
    res.status(200).send(response.data.username); // 200 status code?
}).catch(err => { 
    console.log(err); 
    res.sendStatus(500); // Send 500 status code
});
});

app.listen(port, function () { 
    console.log(`http://localhost:${port}/`);
});
//this confuses me bbg
//lol
