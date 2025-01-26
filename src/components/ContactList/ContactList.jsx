import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
    return (
        <ul className={styles.contactList}>
            {contacts.map(contact => (
                <Contact
                    key={contact.id}
                    contact={contact}
                    onDelete={() => onDeleteContact(contact.id)}
                />
            ))}
        </ul>
    );
}

export default ContactList;
