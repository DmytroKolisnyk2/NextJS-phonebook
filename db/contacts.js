const fs = require('fs').promises;
const path = require('path');
const { v4 } = require('uuid');

const contactsPath = path.resolve('./public/contacts.json');

async function writeContacts(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
}

async function getAllContacts() {
  const contacts = JSON.parse(await fs.readFile(contactsPath));
  return contacts;
}

async function createContact(data) {
  const newContact = {
    id: v4(),
    createdAt: Date.now(),
    ...data
  };

  const contacts = await getAllContacts();
  if (contacts.length >= 100) throw new Error('Too many contacts now');
  contacts.push(newContact);
  await writeContacts(contacts);

  return newContact;
}

async function getContactById(contactId) {
  const contacts = await getAllContacts();
  const targetContact = contacts.find(({ id }) => id === contactId);

  return targetContact;
}

async function deleteContact(contactId) {
  const contacts = await getAllContacts();
  const updatedContacts = contacts.filter(({ id }) => id !== contactId);
  const deletedContact = contacts.find(({ id }) => id === contactId);

  await writeContacts(updatedContacts);
  return deletedContact;
}



module.exports = {
  getAllContacts,
  createContact,
  getContactById,
  deleteContact,
};