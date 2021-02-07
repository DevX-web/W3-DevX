import { Input } from '@geist-ui/react';
import { Search, User } from '@geist-ui/react-icons';
import styles from './SearchBar.module.css';

const SearchBar = ({ downSm }) => {
  return (
    <div className={styles.searchBarContainer}>
      <Input
        icon={<Search />}
        placeholder="Search"
        iconRight={downSm ? <User /> : undefined}
      />
    </div>
  );
};

export default SearchBar;
