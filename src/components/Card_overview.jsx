/* eslint-disable react/prop-types */
import '../css/Card_overview.css'

export default function Card_overview (props){
    return(
        <section >
            
            <div className="card_overview">
                
                <div className='cards-title'>
                    <p className='p-overview'>{props.card.describe}</p>
                    <img src={props.card.social} alt={`icon ${props.card.social}`} className='facebook-icon' />
                </div>
                
                <div className='nb-followers-icon'>
                    <p className='nb-overview'>{props.card.follower}</p>
                    <span>
                        <img src={props.card.icon?"src/assets/icon-up.svg":"src/assets/icon-down.svg"} alt="up icon" className='up-icon-card' />
                        <p className={props.card.icon?'text-card-overview-green': 'text-card-overview-red'}>{props.card.follower_today}</p>
                    </span>
                </div>
            </div>
        </section>
    )
}
