import outageSchedule from '../models/outageSchedule.js';

const newSchedule = {
	group: 1,
	weeks: [
		{
			monday: [
				{
					day: 'Понеділок',
					timeStatus: [
						{ time: '00:00', status: false },
						{ time: '01:00', status: true },
						{ time: '02:00', status: false },
						{ time: '03:00', status: true },
						{ time: '04:00', status: false },
						{ time: '05:00', status: true },
						{ time: '06:00', status: false },
						{ time: '07:00', status: false },
						{ time: '08:00', status: false },
						{ time: '09:00', status: true },
						{ time: '10:00', status: true },
						{ time: '11:00', status: true },
						{ time: '12:00', status: true },
						{ time: '13:00', status: false },
						{ time: '14:00', status: false },
						{ time: '15:00', status: true },
						{ time: '16:00', status: false },
						{ time: '17:00', status: false },
						{ time: '18:00', status: true },
						{ time: '19:00', status: true },
						{ time: '20:00', status: false },
						{ time: '21:00', status: true },
						{ time: '22:00', status: false },
						{ time: '23:00', status: true },
					],
					data: new Date('2024-03-15'), // Припустимо, що це сьогоднішня дата
				},
			],
			tuesday: [
				{
					day: 'Вівторок',
					timeStatus: [
						{ time: '00:00', status: true },
						{ time: '01:00', status: false },
						{ time: '02:00', status: false },
						{ time: '03:00', status: false },
						{ time: '04:00', status: true },
						{ time: '05:00', status: true },
						{ time: '06:00', status: false },
						{ time: '07:00', status: false },
						{ time: '08:00', status: false },
						{ time: '09:00', status: true },
						{ time: '10:00', status: true },
						{ time: '11:00', status: false },
						{ time: '12:00', status: false },
						{ time: '13:00', status: false },
						{ time: '14:00', status: true },
						{ time: '15:00', status: true },
						{ time: '16:00', status: false },
						{ time: '17:00', status: false },
						{ time: '18:00', status: false },
						{ time: '19:00', status: true },
						{ time: '20:00', status: true },
						{ time: '21:00', status: false },
						{ time: '22:00', status: false },
						{ time: '23:00', status: false },
					],
					data: new Date('2024-03-15'), // Припустимо, що це сьогоднішня дата
				},
			],
			wednesday: [
				{
					day: 'Середа',
					timeStatus: [
						{ time: '00:00', status: false },
						{ time: '01:00', status: true },
						{ time: '02:00', status: false },
						{ time: '03:00', status: false },
						{ time: '04:00', status: false },
						{ time: '05:00', status: true },
						{ time: '06:00', status: true },
						{ time: '07:00', status: true },
						{ time: '08:00', status: false },
						{ time: '09:00', status: true },
						{ time: '10:00', status: true },
						{ time: '11:00', status: true },
						{ time: '12:00', status: false },
						{ time: '13:00', status: true },
						{ time: '14:00', status: false },
						{ time: '15:00', status: true },
						{ time: '16:00', status: false },
						{ time: '17:00', status: false },
						{ time: '18:00', status: false },
						{ time: '19:00', status: true },
						{ time: '20:00', status: false },
						{ time: '21:00', status: true },
						{ time: '22:00', status: false },
						{ time: '23:00', status: false },
					],
					data: new Date('2024-03-15'), // Припустимо, що це сьогоднішня дата
				},
			],
			thursday: [
				{
					day: 'Четверг',
					timeStatus: [
						{ time: '00:00', status: false },
						{ time: '01:00', status: true },
						{ time: '02:00', status: true },
						{ time: '03:00', status: true },
						{ time: '04:00', status: false },
						{ time: '05:00', status: true },
						{ time: '06:00', status: true },
						{ time: '07:00', status: true },
						{ time: '08:00', status: false },
						{ time: '09:00', status: true },
						{ time: '10:00', status: false },
						{ time: '11:00', status: true },
						{ time: '12:00', status: true },
						{ time: '13:00', status: true },
						{ time: '14:00', status: false },
						{ time: '15:00', status: true },
						{ time: '16:00', status: true },
						{ time: '17:00', status: true },
						{ time: '18:00', status: false },
						{ time: '19:00', status: true },
						{ time: '20:00', status: false },
						{ time: '21:00', status: true },
						{ time: '22:00', status: true },
						{ time: '23:00', status: true },
					],
					data: new Date('2024-03-15'), // Припустимо, що це сьогоднішня дата
				},
			],
			friday: [
				{
					day: 'П`ятниця',
					timeStatus: [
						{ time: '00:00', status: false },
						{ time: '01:00', status: true },
						{ time: '02:00', status: true },
						{ time: '03:00', status: true },
						{ time: '04:00', status: false },
						{ time: '05:00', status: true },
						{ time: '06:00', status: true },
						{ time: '07:00', status: true },
						{ time: '08:00', status: false },
						{ time: '09:00', status: true },
						{ time: '10:00', status: true },
						{ time: '11:00', status: true },
						{ time: '12:00', status: true },
						{ time: '13:00', status: true },
						{ time: '14:00', status: false },
						{ time: '15:00', status: true },
						{ time: '16:00', status: false },
						{ time: '17:00', status: true },
						{ time: '18:00', status: true },
						{ time: '19:00', status: true },
						{ time: '20:00', status: false },
						{ time: '21:00', status: true },
						{ time: '22:00', status: false },
						{ time: '23:00', status: true },
					],
					data: new Date('2024-03-15'), // Припустимо, що це сьогоднішня дата
				},
			],
			saturday: [
				{
					day: 'Субота',
					timeStatus: [
						{ time: '00:00', status: false },
						{ time: '01:00', status: true },
						{ time: '02:00', status: false },
						{ time: '03:00', status: false },
						{ time: '04:00', status: false },
						{ time: '05:00', status: true },
						{ time: '06:00', status: false },
						{ time: '07:00', status: true },
						{ time: '08:00', status: false },
						{ time: '09:00', status: true },
						{ time: '10:00', status: false },
						{ time: '11:00', status: true },
						{ time: '12:00', status: false },
						{ time: '13:00', status: true },
						{ time: '14:00', status: false },
						{ time: '15:00', status: true },
						{ time: '16:00', status: false },
						{ time: '17:00', status: false },
						{ time: '18:00', status: false },
						{ time: '19:00', status: false },
						{ time: '20:00', status: false },
						{ time: '21:00', status: true },
						{ time: '22:00', status: false },
						{ time: '23:00', status: true },
					],
					data: new Date('2024-03-15'), // Припустимо, що це сьогоднішня дата
				},
			],
			sunday: [
				{
					day: 'Неділя',
					timeStatus: [
						{ time: '00:00', status: false },
						{ time: '01:00', status: true },
						{ time: '02:00', status: false },
						{ time: '03:00', status: true },
						{ time: '04:00', status: false },
						{ time: '05:00', status: false },
						{ time: '06:00', status: false },
						{ time: '07:00', status: false },
						{ time: '08:00', status: false },
						{ time: '09:00', status: true },
						{ time: '10:00', status: false },
						{ time: '11:00', status: true },
						{ time: '12:00', status: false },
						{ time: '13:00', status: true },
						{ time: '14:00', status: false },
						{ time: '15:00', status: true },
						{ time: '16:00', status: false },
						{ time: '17:00', status: false },
						{ time: '18:00', status: false },
						{ time: '19:00', status: true },
						{ time: '20:00', status: false },
						{ time: '21:00', status: true },
						{ time: '22:00', status: false },
						{ time: '23:00', status: false },
					],
					data: new Date('2024-03-15'), // Припустимо, що це сьогоднішня дата
				},
			],
			// Додайте інші дні тижня тут з аналогічними даними, як для Понеділка
		},
	],
	persent: 100,
};

export const createSchedult = async (req, res) => {
	let falseCount = 0;

	newSchedule.weeks.forEach(week => {
		Object.values(week).forEach(day => {
			day.forEach(timeSlot => {
				falseCount += timeSlot.timeStatus.reduce((acc, curr) => {
					return acc + (curr.status === false ? 1 : 0);
				}, 0);
			});
		});
	});

	const totalWeek = 24 * 7;
	const percentage = (falseCount / totalWeek) * 100;

	newSchedule.persent = percentage;

	outageSchedule
		.create(newSchedule)
		.then(newSchedule => {
			console.log('Новий запис таблиці успішно створений:', newSchedule);

			res.json({
				newSchedule,
			});
		})
		.catch(error => {
			console.error('Помилка при створенні нового запису таблиці:', error);
		});
};

export const getSchedult = async (req, res) => {
	try {
		const outageschedules = await outageSchedule.find();

		return res.json(outageschedules);
	} catch (err) {
		console.log('не вдалось отримати розклад', err);
	}
};
