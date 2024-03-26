import KharkivRegion from '../models/KharkivRegion.js';
import outageSchedule from '../models/outageSchedule.js';

export const create = async (req, res) => {
	try {
		const schedulesId = await outageSchedule.findOne({ group: req.body.scheduleIds });

		if (!schedulesId) {
			return res.status(404).json({ message: 'Розклад не знайдено' });
		}

		const doc = new KharkivRegion({
			name: req.body.name,
			schedules: schedulesId._id,
		});
		const region = await doc.save();

		res.json(region);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: 'Не вдалось додати район Харкова',
		});
	}
};

export const getAll = async (req, res) => {
	try {
		const region = await KharkivRegion.find().sort({ name: 1 }).collation({ locale: 'uk' });
		res.json(region);
	} catch (err) {
		console.log(err);
		res.status(404).json({
			message: 'не вдалось отримати райони',
		});
	}
};
