const PORT = process.env.PORT || 4000;
import 'dotenv/config';
import { app } from './app';

app.listen(PORT, () => {
    console.log('Server is running!');
});