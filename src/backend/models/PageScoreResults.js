import mongoose from 'mongoose'

let Schema = mongoose.Schema

let pageSpeedScoreSchema = new Schema({
	date: { type: Date, required: true, unique: true },
	siteId: {type: Schema.Types.ObjectId, required: true},
	url: String,
	xmlUrl: String, 
	jsonUrl: String,
	summary: String,
	pageSpeedScore: Number,
	loadTime: Number,
	firstByte: Number,
	startRender: Number,
	visuallyComplete: Number,
	speedIndex: Number,
	domElements: Number,
	dcTime: Number,
	dcRequests: Number,
	dcBytesIn: Number,
	flTime: Number,
	flRequests: Number,
	flBytesIn: Number,
	twoHundreds: Number,
	fourOhFours: Number,
	other: Number,
	siteSearch: Number 
});

let PageSpeedScore = mongoose.model("PageSpeedScore", pageSpeedScoreSchema);

export default PageSpeedScore;