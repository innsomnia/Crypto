import { WithRuBalance } from '../../helpers/hoc/withRuBalance'
import './styles.css'

const Card = ({ balance, setBalance, ruBalance }) => {
  return (
    <div className='card'>
      <div className='card-block'>
        <p>CRYPTO-FINANCE</p>
        <button onClick={() => setBalance((prev) => prev + 1000)} className='btn'>
          Add money
        </button>
      </div>

      <div className='card-block'>
        <p>ARTEM</p>
        <div className='card-balance'>
          <p>{balance} $</p>
          <p>{ruBalance} ₽</p>
        </div>
      </div>
    </div>
  )
}

export default WithRuBalance(Card)
