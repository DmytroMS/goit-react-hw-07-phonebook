
import ContactItem from './ContactTemplate'
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
 import { fetchContacts } from '../../redux/contacts/contactsOperations';
import { getVisibleContact } from '../../redux/contacts/contactsSelectors';

export default function ContactList() {
    const contacts = useSelector(getVisibleContact);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <ul > {
            contacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
          
                />
            ))
        }
       
            </ul> 
    );
};

ContactList.propTypes = {
    contacts: PropTypes.array,
}
 

