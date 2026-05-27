export const errorHandler = (err, req, res, next) => {
    console.error(err);

    const status = err.status || 500;
    const message = err.message || "Internal Server Error";

    res.stats(status).json({
        success: false,
        error: message,
    });
}