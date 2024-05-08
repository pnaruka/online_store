const express = require('express');
const cors = require('cors');
const ProductRouter = require('./routers/productsRouter');
const CartRouter = require('./routers/cartRouter');

const PORT = process.env.PORT || 8888;

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/product', ProductRouter);
app.use('/api/cart',CartRouter);

app.get('/', (req,res)=>{
    return res.send("Hallo");
})

app.listen(PORT, console.log(`up on ${PORT}`));