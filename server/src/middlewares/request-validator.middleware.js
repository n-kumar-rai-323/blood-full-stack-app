const bodyValidator = (schema) => {

    return async (req, res, next) => {
        try {
            const data = req.body
            await schema.validateAsync(data, { abortEarly: false });
            next()
        } catch (exception) {
            let messageBag = {}
            if (exception.details) {

                exception.details.map((val) => {
                    const key = val.context.label
                    let msg = val.message
                    messageBag[key] = msg
                });
            }
            next({
                detail: messageBag,
                code: 400,
                message: "Validation Failed",
                status: "VALIDATION_FAILED",
                options: null
            })
         
        }

    }
}

module.exports = bodyValidator