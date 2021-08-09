const express = require('express');
const server = express();
const port = 3000;
const { BillCalculationHelper } = require('./restaurant')

server.use(express.urlencoded({
    extended: true
}));

server.post('/index', (req, res) => {
    console.log(req.body);

    let billAmount = parseFloat(req.body.billAmount);
    let taxRate = parseFloat(req.body.taxRate);
    let finalBillAmount = BillCalculationHelper.calculateBillForCustomer(billAmount, taxRate);
    
    res.set('Content-Type', 'text/html');
    res.send(`
        <html>
            <body>
                <h1>
                    Initial Bill is: ${billAmount}</br>
                    Tax Rate is: ${taxRate}</br>
                    Final Bill Amount is: $${finalBillAmount}</br>
                </h1>
            </body>
        </html>
    `);
});

server.get('/*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
