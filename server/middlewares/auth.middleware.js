import AppError from "../utils/appError.utils.js";
import asyncHandler from "./asyncHandler.middleware.js";
import jwt from "jsonwebtoken";
export const isLoggedIn = asyncHandler(async (req, res, next) => {
  const token =
    (Object.keys(req.cookies).length > 1 && req.cookies.token) ||
    (req.headers.authorization && req.headers["authorization"].split(" ")[1]);

  if (!token) {
    return next(new AppError("NOT authorized", 401));
  }

  // decoding the token using jwt package verify method
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);

  // if no decode sent the message unauthorized
  if (!decoded) {
    return next(new AppError("Unauthorized, please login to continue", 401));
  }

  // if all good store the id in req object, modifying the request object adding a custom field user in it
  req.user = decoded;

  // Do not forget to call the next otherwise the flow of execution will not be passed further.
  next();
});

// middleware to check if user is admin or not
export const authorizeRoles = (...roles) =>
  asyncHandler(async (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to view this route", 403)
      );
    }
    next();
  });
