// const fs = require('fs')
// const qrcode = require('qrcode')
const fetch = require('node-fetch')
const request = require('request')


// const url = 'https://wasipetapp.com/api/qrs2021';

const run = () => {

    request.get(url, (err, resp, body) =>{
        if(err) {
            return console.error(err);
        }
        console.dir(JSON.parse(body))
    })
    // const QR = await qrcode.toDataURL(url);
    // const htmlContent = `
    // <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
    //     <h2>QR code</h2>
    //     <br />
    //     <img src="${QR}"/>
    // </div>
    // `;
    // fs.writeFileSync(`./{QR}.html`, htmlContent)
}
run()