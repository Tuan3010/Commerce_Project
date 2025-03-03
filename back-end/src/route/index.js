const productRouter = require('./productRoute');


function Routes(app) {
  app.use('/product', productRouter);
}

module.exports = Routes;