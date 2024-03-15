import Address from '../models/Address.js';
import { validationResult } from 'express-validator';

export const create = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	try {
		const doc = new Address({
			addressPlace: req.body.addressPlace,
			address: req.body.address,
			city: req.body.city,
			user: req.userId,
		});
		const address = await doc.save();

		res.json(address);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: 'не вдалось створити нову адресу',
		});
	}
};

export const getAll = async (req, res) => {
	try {
		const addresses = await Address.find({ user: req.userId });

		res.json(addresses);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: 'не вдалось отримати статті',
		});
	}
};

export const getOne = async (req, res) => {
	try {
		const addressId = req.params.id;

		const doc = await Address.findOneAndUpdate({ _id: addressId }, {}, { returnDocument: 'after' });

		if (!doc) {
			return res.status(404).json({
				message: 'Адреса не знайдена',
			});
		}

		res.json(doc);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: 'не вдалось отримати адресу',
		});
	}
};

export const update = async (req, res) => {
	try {
		const addressId = req.params.id;

		// Перевірка, чи передані дані для оновлення
		if (!req.body) {
			return res.status(400).json({
				message: 'Не вказані дані для оновлення',
			});
		}

		const doc = await Address.findOneAndUpdate(
			{ _id: addressId, user: req.userId }, // Умова пошуку: id адреси та ідентифікатор користувача
			req.body, // Дані для оновлення
			{ new: true } // Параметр new: true, щоб повертати оновлений документ
		);

		if (!doc) {
			return res.status(404).json({
				message: 'Адреса не знайдена або недоступна для оновлення',
			});
		}

		res.json(doc);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: 'Не вдалось оновити адрессу',
		});
	}
};

export const remove = async (req, res) => {
	try {
		const addressId = req.params.id;

		const doc = await Address.findOneAndDelete({ _id: addressId }, {}, { returnDocument: 'after' });
		if (!doc) {
			return res.status(404).json({
				message: 'Адреса не знайдена',
			});
		}

		res.json({
			success: true,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: 'не вдалось отримати адресу',
		});
	}
};
