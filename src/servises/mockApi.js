import axios from "axios";

axios.defaults.baseURL = 'https://61934495d3ae6d0017da8452.mockapi.io';


export async function getContactsFromApi() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function deleteContactsFromApi(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}

export async function addContactsInApi(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}