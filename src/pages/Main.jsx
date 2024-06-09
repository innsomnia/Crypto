import Card from '../components/Card/Card'
import CoinsList from '../components/CoinsList/CoinsList'
import styles from './styles.module.css'
import FilterBlock from './../components/FilterBlock/FIlterBlock'

const Main = ({ balance, setBalance, coins, setCoins }) => {
  return (
    <main className={styles.main}>
      <Card balance={balance} setBalance={setBalance} />
      <FilterBlock setCoins={setCoins} />
      {coins.length > 0 ? <CoinsList /> : <div>Loading...</div>}
    </main>
  )
}

export default Main
