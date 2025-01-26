import { useState, useEffect } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import './App.css';

function App() {
    const [contacts, setContacts] = useState(() => {
        const savedContacts = localStorage.getItem('contacts');
        return savedContacts ? JSON.parse(savedContacts) : [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
    });
    const [filter, setFilter] = useState('');

    useEffect(() => {
        if (contacts.length > 0) {
            localStorage.setItem('contacts', JSON.stringify(contacts));
        }
    }, [contacts]);

    const handleAddContact = (newContact) => {
        setContacts(prevContacts => [...prevContacts, newContact]);
    };

    const handleDeleteContact = (id) => {
        setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
    };

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    const handleFilterChange = event => {
        setFilter(event.target.value);
    };

    return (
        <div className="app-container">
            <h1 className="app-title">Phonebook</h1>
            <ContactForm onAddContact={handleAddContact} />
            <SearchBox filter={filter} onFilterChange={handleFilterChange} />
            <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
        </div>
    );
}

export default App;
