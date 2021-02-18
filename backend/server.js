import express from 'express';

const app = express();

app.use('/', (req, res) => res.send('Server works'));

app.listen(5000, () => console.log('Server running'));