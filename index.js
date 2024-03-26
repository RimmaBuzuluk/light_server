import express from 'express';
import mongoose from 'mongoose';
import * as UserControllers from './controllers/UserControllers.js';
import * as AddressController from './controllers/AddressController.js';
import * as ScheduleController from './controllers/ScheduleController.js';
import * as RegionController from './controllers/KharkivRegion.js';
import { loadCitiesFromJSON, getAllCities } from './controllers/CityController.js';
import { addressCreateValidation, loginValidation, registerValidator } from './validation.js';
import checkAuth from './utils/checkAuth.js';
import Address from './models/Address.js';
import ping from 'ping';
import cors from 'cors';

const URL = 'mongodb+srv://rimmysya2000:6665866658@cluster0.ffvizlz.mongodb.net/address?retryWrites=true&w=majority&appName=Cluster0';

mongoose
	// .connect('mongodb+srv://auth:18102000@cluster0.g2sluk8.mongodb.net/address?retryWrites=true&w=majority')
	// .connect('mongodb+srv://rimmysya2000:6665866658@cluster0.ffvizlz.mongodb.net/address?retryWrites=true&w=majority')
	.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('DB ok');
	})
	.catch(err => console.log('DB ERR', err));

const app = express();

app.use(express.json());
app.use(cors());

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

app.post('/schedule', ScheduleController.createSchedult);
app.get('/schedule', ScheduleController.getSchedult);
app.get('/schedule/:id', ScheduleController.getOneSchedule);
app.post('/region', RegionController.create);
app.get('/region', RegionController.getAll);

app.get('/chech-router-availability', async (req, res) => {
	try {
		const response = await fetch(`https://vadymklymenko.com/ping/?ip=77.120.246.48`);
		const data = await response.json();
		return res.json(data);
	} catch (error) {
		console.error('Помилка при отриманні даних з зовнішнього сервера:', error);
		res.status(500).json({ error: 'Помилка при отриманні даних з зовнішнього сервера' });
	}
});

app.put('/addresSatus/:addressId', async (req, res) => {
	try {
		const addressId = req.params.addressId;
		console.log(addressId);

		const address = await Address.findById(addressId);

		const response = await fetch(`https://vadymklymenko.com/ping/?ip=${address.address}`);
		const data = await response.json();

		if (JSON.stringify(data) === JSON.stringify({ status: 'ok' })) {
			address.status = true;
		} else {
			address.status = false;
		}

		await address.save();

		// address.status = true;
		return res.json(address);
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: 'виникла проблема з зміненням статусу адреси' });
	}
});

const PORT = 2000;
app.listen(PORT, err => {
	if (err) {
		return console.log(err);
	}
	console.log('server ok');
});
