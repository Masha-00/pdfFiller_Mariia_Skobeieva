import styles from './DocumentList.module.scss';
import Button from '../Button/Button';
import { ReactComponent as FileSVG } from "../../assets/File.svg";

const DocumentList = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data.map((item, index) => (
        <li className={styles.item} key={index}>
          <div className={styles.item__listItemFile}>
            <div className={styles.item__listItemFileSVG}>
              <FileSVG width={36} height={47} />
            </div>
            <div className={styles.item__listItemDescription}>
              <p className={styles.item__listItemName}>
                {item.title}
              </p>
              <span className={styles.item__listItemTimestamp}>
                Last Edited: {item.lastEdit}
              </span>
            </div>
          </div>
          <Button 
            type="button"
            color="secondary"
            text="View document" 
            className={styles.item__button}>
          </Button>
        </li>
      ))}
    </ul>
  )
}

export default DocumentList;
