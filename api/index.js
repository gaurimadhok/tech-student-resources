import config from 'dotenv';
import express from 'express'
import resourceCatRoutes from './db/src/routes/ResourceCatRoutes';
import resourceSubCatRoutes from './db/src/routes/ResourceSubCatRoutes';
import adminRoutes from './db/src/routes/AdminRoutes';
import cors from 'cors';

config.config();
const app = express();

// could use body parser instead, but express.json works for version 4.16 + 
// https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;
console.log('Right before using resourceCatRoutes');
// app.use('/api/v1/resources', resourceCatRoutes);
app.use('/api/v1/admin', adminRoutes);

//app.use('/api/v1/resourcesub', resourceSubCatRoutes);

app.get('/admin', (req, res) => {
    res.status(200).send('Welcome to the admin route');
});

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});

export default app;