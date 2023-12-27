import React from 'react'
import { Card, CardBody } from '@nextui-org/react'

function ErrorCard({msg="", extra=""}) {
  return (
    <Card className='m-20 bg-secondary'>
        <CardBody>
          <p>{extra}</p>
          <p>Something went wrong: {msg}</p>
        </CardBody>
    </Card>
  )
}

export default ErrorCard