var express = require('express');
var router = express.Router();

const Video = require('../models/Video');

/* GET get videos listing. */
router.get('/', (req, res) => {
	Video.getVideos((err, videos) => {
		if(err){
			throw err;
		}
		res.json(videos);
	});
});

/* POST add videos. */
router.post('/', (req, res) => {
	var video = req.body;
	Video.addVideo(video, (err, video) => {
		if(err){
			throw err;
		}
		res.json(video);
	});
});

/* PUT update video. */
router.put('/:_id', (req, res) => {
	var id = req.params._id;
	var video = req.body;
	Video.updateVideo(id, video, {}, (err, video) => {
		if(err){
			throw err;
		}
		res.json(video);
	});
});

/* DELETE delete video. */
router.delete('/:_id', (req, res) => {
	var id = req.params._id;
	Video.removeVideo(id, (err, video) => {
		if(err){
			throw err;
		}
		res.json(video);
	});
});

module.exports = router;
