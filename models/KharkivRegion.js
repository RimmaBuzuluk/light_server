import mongoose from 'mongoose';

const KharkivRegionSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	schedules: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'outageSchedule',
		},
	],
});

export default mongoose.model('KharkivRegion', KharkivRegionSchema);
