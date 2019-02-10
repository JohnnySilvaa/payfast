//página inicial
module.exports = (app) => {

    app.get('/pagamentos', function(req, resp){
        resp.send('Ok');
    });

    module.exports = (app) => {
            app.post('/pagamentos/pagamento', function(req, resp){
                    const pagamento= req.body;
                    console.log(pagamento);
                    resp.send('Ok');
                });
            }
            
}