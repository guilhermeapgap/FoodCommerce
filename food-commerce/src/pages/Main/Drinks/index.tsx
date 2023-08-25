import { useState, useEffect } from 'react'


import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { getDrinks } from '../../../services/api'

export default function Drinks() {


  const [drinks, setDrinks] = useState([])

  useEffect(()=>{
    (async () => {
      const burgerRequest = await getDrinks()

      setDrinks(burgerRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </>
  )
}
