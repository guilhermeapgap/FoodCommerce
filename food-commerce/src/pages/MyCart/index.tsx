import { Head } from '../../components/Head'
import { OrderHeader } from '../../components/OrderHeader'
import { ConfirmOrder } from '../../components/ConfirmOrder'
import { Table } from './Table'

import { Container } from './styles'

export default function Main() {
  return (
    <Container>
      <Head title='Carrinho' />
      <OrderHeader />
      <Table/>
      <ConfirmOrder/>
    </Container>
  )
}
