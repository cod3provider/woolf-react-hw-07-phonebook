import s from './Message.module.css';

const Message = ({ text }) => {
  return <p className={s.message}>{text}</p>;
};

export default Message;
