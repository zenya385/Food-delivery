const { Schema, model } = require("mongoose");
const Joi = require("joi");

const shopSchema = new Schema({
	name: {
		type: String,
		required: [true],
	}

});

const postAuthValidation = (req, res, next) => {
	const schemaValid = Joi.object({
		email: Joi.string()
			.email({
				minDomainSegments: 2,
				tlds: { allow: ["com", "net"] },
			})
			.optional(),
		password: Joi.string().required(),
	});

	const validationResult = schemaValid.validate(req.body);
	if (validationResult.error) {
		return res.status(400).json({
			contentType: "application/json",
			ResponseBody: validationResult.error.details,
		});
	}
	next();
};

const Shops = model("shops", shopSchema);


const schemas = {
	postAuthValidation,
};

module.exports = {
	Shops,
};
