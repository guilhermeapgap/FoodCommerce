import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'
export default function Burgers() {

  const data = [
    {
      id: 1,
      snack: 'burguer',
      name: 'Mega',
      description: 'Artesanal grande',
      price: 25.5,
      image:'https://i.imgur.com/upjIUnG.jpg'
    },
    {
      id: 2,
      snack: 'burguer',
      name: 'Extra bacon',
      description: 'Artesanal pequeno',
      price: 15.5,
      image:'https://i.imgur.com/B4J04AJ.jpg'
    },
  ]

  return (
    <>
      <Head title='Hambúrgueres'/>
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
