import Button from '../button/Button'
import './Body.scss'

const Body = () => {
  return (
    <div className='Body'>
          <h1>Earn <span>1% Weekly</span>  by staking  your Token here</h1>
          <p>Get started by connecting your wallet, buy some tokens,Stake it, then come back in 7 days to claim your reward</p>
          <Button title="Connect Wallet"/>
          
      </div>
  )
}

export default Body