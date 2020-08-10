const NearbyShardingClient = require("./Core/NearbyShardingClient");
const n = new NearbyShardingClient();
n.NearbyShardInit();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(require('./routes'));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(app.get('port'), () => {
  console.log('servidor listo en el puerto', app.get('port'));
});