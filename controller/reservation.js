import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, phoneNo, time, email, date } = req.body;
    if (!firstName || !lastName || !phoneNo || !time || !email || !date) {
        return next(new ErrorHandler("please fill the complete details in the form", 400));
    }
    try {
        await Reservation.create({ firstName, lastName, phoneNo, time, email, date });
        res.status(200).json({
            success: true,
            message: "reservation done successfully",
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map((err) => err.message);
            return next(new ErrorHandler(validationErrors.join(' , '), 400));
        }
        return next(error);
    }
};