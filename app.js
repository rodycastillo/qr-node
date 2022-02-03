const { json } = require("express")
const express = require("express")
const app = express()
const fs = require('fs')
const qrcode = require('qrcode')
const request = require('request')
// const htmlToImage = require('html-to-image');

app.use(express.json())

const url = 'https://wasipetapp.com/api/qrs2021';


const run = async () => {

      request.get(url, (err, resp, body) =>{
        if(err) {
            return console.error(err);
        }
        const data = JSON.parse(body)
        // console.log(data);
        data.forEach((qr, i) => {
            const QR =  qrcode.toDataURL(`id:${qr._id},points:${qr.points}`);
            const htmlContent = `
            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <h2>QR code</h2>
                <br />
                <img src="${QR}"/>
            </div>
            `;
            fs.writeFileSync(`./img/00${i+1}.html`, htmlContent)
        })
    })
    
    
}
run()