import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', (_request, response) => {
    response.status(200).json();
});

app.use((_request, response) => {
    response.status(404).json({message: 'Not found!'})
})

app.listen(Number(process.env.PORT));