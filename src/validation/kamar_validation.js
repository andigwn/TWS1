import Joi from "joi";

const createKamarValidation = Joi.object({
    nomor_kamar: Joi.string().max(100).required(),
    harga: Joi.number().positive().required(),
    fasilitas: Joi.string().max(100).required(),
});

const getKamarValidation = Joi.number().min(1).positive().required();

const updateKamarValidation = Joi.object({
    id: Joi.number().min(1).positive().required(),
    nomor_kamar: Joi.string().max(100).required(),
    harga: Joi.number().positive().required(),
    fasilitas: Joi.string().max(100).required(),
})

export { createKamarValidation, getKamarValidation, updateKamarValidation };