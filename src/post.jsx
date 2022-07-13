import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faComment, faHeart, faRetweet, faArrowUpFromBracket}  from  '@fortawesome/free-solid-svg-icons'
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons'


function Component ({data}) {
    const {name, photo, nickname, content, image, date} = data

  return (
    <div>
    <h1> HW15 'ReactJS. Основи'</h1>
    <div className='conteiner'>
            <img src={photo} className='photo' alt = "anakin"/>
            <div className='content'>
                <div>
                    <h3>{name}</h3>
                   <FontAwesomeIcon icon={faCheckCircle}/>
                    <span>{nickname} {date} </span>
                </div>
                <p>{content}</p>
                <img src={image} className='image' alt = "ray"/>
                <div className='icon'>
                    <div>
                        <FontAwesomeIcon icon={faComment}/>
                        <p>482</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faRetweet}/>
                        <p>146</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHeart}/>
                        <p>887</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faArrowUpFromBracket}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
  );
}

export default Component;




