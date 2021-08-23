import React, { useState } from 'react'
import { Cell, Input, Checkbox, Button } from 'zarm'
import CustomIcon from '@/components/CustomIcon'
import Captcha from 'react-captcha-code'
import s from './style.module.less'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [captcha, setCaptcha] = useState('')
  const [verify, setVerify] = useState('')
  return (
    <div className={s.auth}>
      <div className={s.head}></div>
      <div className={s.tab}></div>
      <div className={s.form}>
        <Cell icon={<CustomIcon type='zhanghao' />}>
          <Input
            clearable
            type='text'
            placeholder='请输入账号'
            onChange={value => setUsername(value)}
          />
        </Cell>
        <Cell icon={<CustomIcon type='mima' />}>
          <Input
            clearable
            type='password'
            placeholder='请输入密码'
            onChange={value => setPassword(value)}
          />
        </Cell>
        <Cell icon={<CustomIcon type='mima' />}>
          <Input
            clearable
            type='text'
            placeholder='请输入验证码'
            onChange={value => setVerify(value)}
          />
          <Captcha charNum={4} />
        </Cell>
      </div>
      <div className={s.operation}>
        <div className={s.agree}>
          <Checkbox />
          <label className='text-light'>
            阅读并同意<a>《掘掘手札条款》</a>
          </label>
        </div>
        <Button block theme='primary'>
          注册
        </Button>
      </div>
    </div>
  )
}

export default Login
