import { CoinsContext } from './context/coinsContext'
import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Main from './pages/Main'
import { getCoins } from './api/api'

function App() {
  const [balance, setBalance] = useState(0)
  const [coins, setCoins] = useState([])
  const [filteredCoins, setFilteredCoins] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoins()
      setCoins(data.coins)
      setFilteredCoins(data.coins)
    }
    fetchData()
  }, [])

  return (
    <>
      <CoinsContext.Provider value={{ coins, filteredCoins }}>
        <Header />
        <Main
          coins={coins}
          filteredCoins={filteredCoins}
          setCoins={setFilteredCoins}
          balance={balance}
          setBalance={setBalance}
        />
      </CoinsContext.Provider>
    </>
  )
}

export default App
