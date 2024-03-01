import mongoose from 'mongoose';

const lightStatusSchema = new mongoose.Schema({
	status: {
		type: Boolean,
		required: true,
	},
	timestamp: {
		type: Date,
		default: Date.now,
	},
});

const LightStatus = mongoose.model('LightStatus', lightStatusSchema);

export default LightStatus;
