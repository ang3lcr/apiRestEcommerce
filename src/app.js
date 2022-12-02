const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const db = require("./utils/database")
const handleError = require('./middlewares/error.middleware');
const initModels = require("./models/initModels");
const { userRoutes, authRoutes, productRoutes, cartRoutes, purchaseRoutes } = require('./routes');


const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

initModels();

db.authenticate()
    .then(() => console.log("Succesfully authenticated"))
    .catch((error) => console.log(error));

db.sync({force:false})
    .then(() => console.log("Database sync"))
    .catch((error) => console.log(error));

app.get('/', (req, res) => {
    console.log("Welcomeee");
});

app.use('/api/v1', userRoutes);
app.use('/api/v1', authRoutes);
app.use('/api/v1', productRoutes);
app.use('/api/v1', cartRoutes);
app.use('/api/v1', purchaseRoutes);



app.use(handleError);

module.exports = app;