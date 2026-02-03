exports.healthCheck = (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "TestTrack Pro API is healthy 🚀"
  });
};
