const express = require('express');
const cors = require('cors');
const ProductRouter = require('./routers/productsRouter');

const PORT = process.env.PORT || 8888;

const app = express();
app.use(cors());
app.use('/api/product', ProductRouter);

app.get('/', (req,res)=>{
    return res.send("Hallo");
})

app.listen(PORT, console.log(`up on ${PORT}`));