
import './App.css'
import Navbar from './components/Navbar'
import Card_follower from './components/Card_follower'
import Card_overview from './components/Card_overview'
import data_followers from './data_followers'
import data_overview from './data_overview'

function App() {
  const cards_follower = data_followers.map(item=>{
    return (
      <Card_follower 
        key={item.id}
        item={item}
      />
    )
  })
  const cards_overview = data_overview.map(card=>{
    return(
      <Card_overview 
        key={card.id}
        card={card}
      />
    )
  })
  return (
    <div className="container">
      <Navbar />
      <div className="cards-container">
        {cards_follower}
      </div>
      <h3 className='title-overview'>Overview-Today</h3>
      <div className='cards-container'>
        {cards_overview}
      </div>
    </div>
  );
}

export default App;



