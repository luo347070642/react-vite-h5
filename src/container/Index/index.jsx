import React from 'react'
import { Button } from 'zarm'
import s from '../../less/style.module.less'

export default function Index() {
  return (
    <div className={s.index}>
      <Button theme='primary'>index</Button>
    </div>
  )
}