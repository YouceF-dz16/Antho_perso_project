/* eslint-disable react/prop-types */
import '../css/Card_followers.css'

export default function Card_follower (props){
    return(
        <div className="card_follower">
            <div className='facebook-email'>
                <img src={props.item.social} className="facebook--img"></img>
                <span className="card--email">{props.item.email}</span>
            </div>
            <p className='nb-followers'>{props.item.follower}</p>
            <p className='p-followers'>{props.item.describe}</p>
            <div className='up-icon-text'>
                <img src={props.item.icon?"src/assets/icon-up.svg":"src/assets/icon-down.svg"} alt="icon" className="up-icon-card"/>
                <p className={props.item.icon ? 'text-card-green' : 'text-card-red'}>{props.item.follower_today}</p> 
            </div>
        </div>
    )
}
