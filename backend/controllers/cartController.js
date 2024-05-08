
const placeOrder = async(req, res)=>{
   
    const {first_name, last_name, address} = req.body.user;
    
    if(!first_name || !last_name || !address){
        return res.status(400).send("Please provide all required fields.");
    }

    return res.status(201).json(req.body.order);
}

module.exports = {
    placeOrder
}