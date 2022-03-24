import './Widget.scss'
import Button from '../button/Button'

const Widget = ({title}) => {
  return (
      <div className='widget'>
          <div className='top'>
              <div className="title">{title}</div>
          <div className="Subtitle">Some Hours left to get your reward</div>
          </div>
         
          <div className='bottom'>
          <div className="mainText">1830.25 MTK</div>
          <div className="subtext">$1203</div>
              <div className="actionButtons">{<Button title='Get Rewards' />}
              </div>
          </div>
          
    </div>
  )
}

export default Widget