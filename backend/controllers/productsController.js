const fetchProducts = async (req, res) => {
    const parentDir = path.dirname(__dirname);
    const filePath = path.join(parentDir, 'data', 'products.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        try {
            const products = JSON.parse(data);
            res.status(200).json(products);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
}

module.exports = {
    fetchProducts
}