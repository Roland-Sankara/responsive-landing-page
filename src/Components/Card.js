import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Card = (props) =>{
    return(
        <div className={props.className} >
            <div className="small-div">
                <FontAwesomeIcon icon={props.icon} className='icon orange'/>
            </div>

            <div className="big-div">
                <span className='div-title'>
                    {props.title}
                </span>
                <br/>
                <span>
                    {props.description}
                </span>
            </div>
        </div>
    )
}

export default Card;
