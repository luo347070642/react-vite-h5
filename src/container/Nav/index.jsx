import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { TabBar } from 'zarm'
import CustomIcon from '@/components/CustomIcon'
import s from '@/less/common.less'

const NavBar = ({ showNav }) => {
  const [activeKey, setActiveKey] = useState('/')
  const history = useHistory()
  const changeTab = path => {
    setActiveKey(path)
    history.push(path)
  }
  return (
    <TabBar
      className={s.tab}
      visible={showNav}
      activeKey={activeKey}
      onChange={changeTab}>
      <TabBar.Item
        itemKey='/'
        title='账单'
        icon={<CustomIcon type='zhangdan' />}
      />
      <TabBar.Item
        itemKey='/data'
        title='统计'
        icon={<CustomIcon type='tongji' />}
      />
      <TabBar.Item
        itemKey='/user'
        title='我的'
        icon={<CustomIcon type='wode' />}
      />
    </TabBar>
  )
}
NavBar.propTypes = {
  showNav: PropTypes.bool
}
export default NavBar
