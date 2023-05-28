import styles from './App.module.scss';
import DocumentList from './components/DocumentList/DocumentList';
import data from './data/data';

function App() {
  return (
    <div className={styles.app}>
      <DocumentList data={data} />
    </div>
  );
}

export default App;
