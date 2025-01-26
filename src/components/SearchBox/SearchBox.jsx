import styles from './SearchBox.module.css';

export default function SearchBox({ filter, onFilterChange }) {
    return (
        <div className={styles.searchBox}>
            <input
                className={styles.searchInput}
                type="text"
                placeholder="Find contacts by name"
                value={filter}
                onChange={onFilterChange}
            />
        </div>
    );
}
