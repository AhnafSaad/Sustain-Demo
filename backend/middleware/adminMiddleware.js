import asyncHandler from 'express-async-handler';

// Middleware to check if the user is an admin
const admin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next(); // User is an admin, proceed to the next function
  } else {
    res.status(403); // 403 Forbidden
    throw new Error('Not authorized as an admin');
  }
});

export { admin };
