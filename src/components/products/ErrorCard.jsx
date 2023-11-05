import React from 'react'
import { Card, CardBody } from '@nextui-org/react'

function ErrorCard() {
  return (
    <Card className='m-20 bg-secondary'>
        <CardBody>
        <p>Oh no, something went wrong.</p>
        </CardBody>
    </Card>
  )
}

export default ErrorCard