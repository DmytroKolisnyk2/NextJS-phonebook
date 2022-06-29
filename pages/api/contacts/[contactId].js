import {
  getContactById,
  deleteContact
} from '../../../db/contacts.js';


export default async function handler(req, res) {
  try {
    const contact = await getContactById(req.query.contactId);

    if (!contact) throw new Error('Contact not found');

    if (req.method === 'GET') res.status(200).json({ ...contact });

    if (req.method === "DELETE") res.status(200).json(await deleteContact(req.query.contactId))

  } catch ({ message }) {
    res.status(404).json({
      message
    })
  }
}