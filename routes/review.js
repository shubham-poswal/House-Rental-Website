const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");


const reviewControllers = require("../controllers/reviews.js");

  // Reviews
  // /post route
  router.post("/", isLoggedIn, 
  wrapAsync(reviewControllers.createReview));
  
  // Delete Review Route
  router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewControllers.destroyReview));

  module.exports = router;