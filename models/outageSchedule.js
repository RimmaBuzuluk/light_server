import mongoose from 'mongoose';

// Схема для представлення дня
const timeShema = new mongoose.Schema({
	time: {
		type: String, // або тип Date, якщо ви хочете зберігати точний час
		required: true,
	},
	status: {
		type: Boolean,
		required: true,
	},
});
const daySchema = new mongoose.Schema({
	day: {
		type: String,
		required: true,
	},
	timeStatus: [timeShema],
	data: {
		type: Date,
		required: true,
	},
});

// Схема для представлення тижня
const weekSchema = new mongoose.Schema({
	monday: [daySchema],
	tuesday: [daySchema],
	wednesday: [daySchema],
	thursday: [daySchema],
	friday: [daySchema],
	saturday: [daySchema],
	sunday: [daySchema],
});

// Основна схема для розкладу відключень
const outageScheduleSchema = new mongoose.Schema(
	{
		group: {
			type: Number,
			required: true,
		},
		persent: {
			type: Number,
			require: true,
		},
		weeks: [weekSchema], // Замінив поле на 'weeks', так як це більше відповідає вашій структурі
	},
	{
		timestamps: true, // Додав 'timestamps' для збереження часу створення та оновлення запису
	}
);

export default mongoose.model('outageSchedule', outageScheduleSchema);
