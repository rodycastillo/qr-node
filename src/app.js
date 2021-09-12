const fs = require('fs')
const qrcode = require('qrcode')


const url = 'https://google.com';
const run = async() => {
    const QR = await qrcode.toDataURL(url);
    const htmlContent = `
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h2>QR code</h2>
        <br />
        <img src="${QR}"/>
    </div>
    `;
    fs.writeFileSync('./index.html', htmlContent)
}
run()