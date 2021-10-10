import {app} from './src/app';

const { PORT: port = 3000 } = process.env;

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
