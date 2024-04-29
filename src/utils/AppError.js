class AppError extends Error {
    constructor(message, identifier) {
        super(message);
        this.identifier = identifier;
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError;