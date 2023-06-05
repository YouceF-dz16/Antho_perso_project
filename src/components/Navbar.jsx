
export default function Navbar() {
    return (
      <nav>
        <div className="nav">
          <h2 className="title">Social Media Dashboard</h2>
  
          <div className="switch-container">
            <input type="checkbox" id="switch" className="switch" />
            <label htmlFor="switch" className="switch-label"></label>
          </div>
        </div>
        <h4 className="followers">Total Followers: 23,004</h4>
      </nav>
    );
  }