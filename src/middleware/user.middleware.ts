export const errorHandler = (err:any, req:any, res:any, next:any) => {
    console.error(err);

    const status = err.status || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({
        success: false,
        error: message,
    });
}