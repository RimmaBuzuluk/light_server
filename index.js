import express from 'express';
import mongoose from 'mongoose';
import * as UserControllers from './controllers/UserControllers.js';
import * as AddressController from './controllers/AddressController.js';
import { loadCitiesFromJSON, getAllCities } from './controllers/CityController.js';
import { addressCreateValidation, loginValidation, registerValidator } from './validation.js';
import checkAuth from './utils/checkAuth.js';
import Address from './models/Address.js';
import ping from 'ping';
import cors from 'cors';

mongoose
	.connect('mongodb+srv://auth:18102000@cluster0.g2sluk8.mongodb.net/address?retryWrites=true&w=majority')
	.then(() => {
		console.log('DB ok');
	})
	.catch(err => console.log('DB ERR', err));

const app = express();

app.use(express.json());
app.use(
	cors({
		origin: 'https://light-project-client.onrender.com',
	})
);

////

// Маршрут для завантаження міст з JSON-файлу до бази даних
app.post('/load-cities', loadCitiesFromJSON);
app.get('/cities', getAllCities);

app.post('/auth/login', loginValidation, UserControllers.login);
app.post('/auth/register', registerValidator, UserControllers.register);
app.get('/auth/me', checkAuth, UserControllers.getMe);

app.post('/address', checkAuth, addressCreateValidation, AddressController.create);
app.get('/address', checkAuth, AddressController.getAll);
app.get('/address/:id', AddressController.getOne);
app.delete('/address/:id', checkAuth, AddressController.remove);
// app.patch('/address', checkAuth, AddressController.update)

const PORT = process.env.port || 2000;
app.listen(PORT, err => {
	if (err) {
		return console.log(err);
	}
	console.log('server ok');
});
