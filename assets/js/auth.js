const Express = require('express'); 
const { URLSearchParams } = require('url'); 
const axios = require('axios'); // Import Axios
const path = require('path'); // Import path
const bodyParser = require('body-parser'); 
const fetch = require('node-fetch')
const fun = require("funcaptcha")
const noblox = require("noblox.js")

async function startApp () {

    const currentUser = await noblox.setCookie('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_43148D36409E78CD5413C3C8E3CA61BC58DCD8B3820A6CC2B4810E407CE68185BC090865D09C2413CA821088BBF72205A2D1AB346ED99C29FA22A5F1A69B81FC9510A463461402829F2EF78310E0D3EBE06BDFB66D4B6D301920025E87E53C5BF95550D17EFB08942C87B83EFB309FC257484FA5EC664BB7AE3F86E381EE2C01AAC188BDFF84E118A402E1EBD17FBF426C6763766A48088F1D180BA342BA6EFF8E46706A701A533F3E535E448BC84D8C34B2CBF5F29B678982363BF75BBA0445B900F326B97509C6B5072007A24B45DE917CF5ABD440EF7BD8A2A42165A2E839FCE7CA4095864B04414621B3597211E5F29986216D3ED8D196E7DF7DF2AC945F32861BC9F141B002707DB87B0637382E5786BEA39FEB7E384F4B54282DA474D410866563563F20F18224750D929AC3A01769FB4B591A1CB25A2283E2E3B67919E96CBF55BBA0F30053F88A4A16A6163CD37A28D2FFCF1BC045F1AC0E6296E9DE7B37754552A599CCBAC2501666C066305072C999B85B0A2E81F0F28DA0A94E59389A426007389F1A7E4C175CF3002BD24D32C674')
    console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)
}
startApp()

// const client_id = '980875637562703952'
// const client_secret = 'CMSXHkva6qA5DRpJimfhis6oimzjZPtQ'

const app = Express()
const port = 80 //idk which port to use

// function make_config(auth) {
//     data = {
//         headers: { //header of data
//             "authorization": `Bearer ${auth}`
//         }
//     }
//     return data;
// }

app.use(Express.urlencoded({extended: false})) //send payloads
app.use(Express.json()) //convert to json
app.use(bodyParser.text()) //json readable

// app.get('/', (req, res) => {

//     res.sendFile(path.join(___dirname + '/index.html'))

// })

// let _new = new URLSearchParams()

// _new.append('client_id', client_id);
// _new.append('client_secret', client_secret); 
// _new.append('grant_type', 'authorization_code'); 
// _new.append('redirect_uri', `https://bloxy.digital${port}`); // redirect on login
// _new.append('scope', 'identify'); // info
// _new.append('code', req.body)

// fetch('https://discord.com/api/oauth2/token', { method: "POST", body: data_1 }).then(response => response.json()).then(data => { // request json payload
// axios.get("https://discord.com/api/users/@me", make_config(data.access_token)).then(response => { 
//     res.status(200).send(response.data.username); // 200 status code?
// }).catch(err => { 
//     console.log(err); 
//     res.sendStatus(500); // Send 500 status code
// });
// });
let user = document.getElementById("user")

async function GetRobloxId(Username) {
    let response = await fetch(`https://api.roblox.com/users/get-by-username?username=${Username}`)//.then(); 
    if (response.status != 200) {
        console.log('nope')
    }
    let _data = await response.json();
    console.log(_data.Id)
    return _data.Id;
    
}


let userId = await GetRobloxId(user)
app.get('/grouplink', (req, res) => {

    res.sendFile(path.join(___dirname + '/grouplink.html'))


})
document.getElementById('submitbtn').addEventListener('click', () => {
    console.log('clicked')


    async function CheckForCode(userId, Code) {
        let response = await fetch(`https://www.roblox.com/users/${userId}/profile`).then();
        if (response.status != 200) { return false; }
        let html = await response.text();
        if (html.indexOf(Code) != -1) {
            return true; //true
        }
        return console.log('no'); //false
    }




    let found = await CheckForCode(userId, '123');

if(!found){
return console.log('code not found | test 1 complete')
} else{
return console.log('code found | test 2 complete')
}

})

app.listen(port, function () { 
    console.log(`http://localhost:${port}/`);
});
//this confuses me bbg
//lol
//fr bbg
