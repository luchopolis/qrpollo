
const qrcode = require('qrcode')
const { URLQR } = require('../config')


const create = async (req, res, next) => {
    const qr = await qrcode.toDataURL(`${URLQR}`)
    render(res, qr)
}
const render = (res,qr) => {
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(`
        <img src='${qr}' style='font-size:100px'></img>
    `));
}


module.exports = { create }