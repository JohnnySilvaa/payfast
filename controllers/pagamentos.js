//página inicial
module.exports = (app) => {
    app.get('/pagamentos', function(req, resp){

        resp.send(`
                    <html>
                        <head>
                            <meta charset="utf-8">
                        </head>
                        <body>
                            <h1>Pagamentos</h1>
                        </body>
                    </html>
                `);
    });
               
}