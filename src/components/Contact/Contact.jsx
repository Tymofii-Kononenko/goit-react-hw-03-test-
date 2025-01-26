import styles from './Contact.module.css';

function Contact({ contact, onDelete }) {
    return (
        <li className={styles.contactItem}>
            <div className={styles.contactInfo}>
                <span className={styles.contactName}>{contact.name}</span>
                <span className={styles.contactNumber}>{contact.number}</span>
            </div>
            <button className={styles.deleteButton} onClick={onDelete}>Delete</button>
        </li>
    );
}

export default Contact;
