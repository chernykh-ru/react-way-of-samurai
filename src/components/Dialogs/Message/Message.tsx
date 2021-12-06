import styles from './../Dialogs.module.css';
// import {MessagesType} from '../../../types/types'

type PropsType = {
  message: string
  id: number
}

const Message: React.FC<PropsType> = ({message, id}) => {
  return <div className={styles.message}>{message}</div>;
};

export default Message;
