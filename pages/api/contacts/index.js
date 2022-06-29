import {
  getAllContacts,
  createContact,

} from '../../../data/contacts';

const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().required(),
  number: Joi.string().required()
})

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') res.status(200).json({ ...await getAllContacts() });
    if (req.method === "POST") {
      const validatedBody = schema.validate(req.body);
      if (validatedBody.error) throw new Error(`missing required name or number field`);
      const newContact = await createContact(req.body);
      res.status(201).json({
        newContact
      })
    }
  } catch ({ message }) {
    res.status(404).json({
      message
    })
  }
}
