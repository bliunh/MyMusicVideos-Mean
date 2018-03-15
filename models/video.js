const mongoose = require('mongoose');

// Video Schema
const VideoSchema = mongoose.Schema({
    artist:{
		type: String,
		required: true
    },
	title:{
		type: String,
		required: true
    },
	video_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Video = module.exports = mongoose.model('Video', VideoSchema);

// Get Videos
module.exports.getVideos = (callback, limit) => {
	Video.find(callback).limit(limit);
}

// Get Video
module.exports.getVideoById = (id, callback) => {
	Video.findById(id, callback);
}

// Add Video
module.exports.addVideo = (video, callback) => {
	Video.create(video, callback);
}

// Update Video
module.exports.updateVideo = (id, video, options, callback) => {
	var query = {_id: id};
	var update = {
        artist: video.artist,
        title: video.title,
        video_url: video.video_url,
	}
	Video.findOneAndUpdate(query, update, options, callback);
}

// Delete Video
module.exports.removeVideo = (id, callback) => {
	var query = {_id: id};
	Video.remove(query, callback);
}
