const express = require('express');

const app = express();

const message = process.env.MESSAGE || 'default message';
app.get('/', (req, res) => {
    res.json({ message });
});

const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Server started on port ${port}`));
