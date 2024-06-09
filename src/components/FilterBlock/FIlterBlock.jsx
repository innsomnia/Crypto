import { CoinsContext } from '../../context/coinsContext'
import React, { useContext } from 'react'
import './styles.css'
import { useFilterCoins } from '../../helpers/hooks/useFilterCoins'

const FilterBlock = ({ setCoins }) => {
  const coinsContext = useContext(CoinsContext)
  const { coins } = coinsContext

  const { value, setValue } = useFilterCoins(coins, setCoins)

  return (
    <div className='filter-block'>
      <input
        className='input'
        onChange={(event) => setValue(event.target.value)}
        value={value}
        type='text'
        placeholder='Введи название..'
      />
    </div>
  )
}

export default React.memo(FilterBlock)
