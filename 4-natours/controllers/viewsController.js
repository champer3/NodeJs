const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, nextt) => {
  // 1. Get tour data from collection
  const tours = Tour.find();

  // 2. Build Template
  // 3. Render Template using tour data from 1
  res.status(200).render('overview', {
    title: 'All Tours',
    user: 'Jonas',
  });
});

exports.getTour = (req, res) => {
  res.status(200).render('tour', {
    title: 'The Forest Hiker Tour',
  });
};
