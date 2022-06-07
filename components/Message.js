import urlify from '../utils/urlify';
import timeStampConvert from '../utils/timeStampConvert';
import imgify from '../utils/imgify';
import Image from 'next/image'
const Message = ({ text, className, timeStamp=169000000, photo}) => {
    return (
        <div className={`message ${className}`}>
            <div className="message__icon">
                <Image src={photo ?? 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="user icon" layout='fill' />
            </div>
            <div className="message__body">
                <div className="message__date">{(timeStampConvert(timeStamp).isToday? 'Сегодня': timeStampConvert(timeStamp).long) +' в '+ timeStampConvert(timeStamp).short }</div>
                <div className="message__bubble">
                    { ( urlify(text) && imgify(text) ) ? <a href={ text.indexOf('https://')==0?text:'https://'+ text  } rel="noreferrer" target="_blank">{text}</a>: text}
                    { ( imgify(text) ) && <img src={text} alt="" />}
                </div>
            </div>   
        </div>
    )
}
export default Message;