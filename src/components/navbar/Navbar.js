import Button from "../button/Button"
import './Navbar.scss'

const Navbar = () => {
  return (
      <div className="navbar">
          <div className="logo">Earnergy</div>
          <nav>
              <a href="/">  Stake Tokens</a>
              <a href="/">  Reward</a>
              <a href="/">  Transactions</a>
              <Button title="Connect Metamask"/>
          </nav>
    </div>
  )
}

export default Navbar