import React from 'react'
import styles from './MenuItems.module.scss'
import MenuItem from './MenuItem/MenuItem'
import engine from './img/engine.svg'
import wheel from './img/wheel.svg'
import gear from './img/gear.svg'
import tools from './img/tools.svg'

const MenuItems = () => {
  return (
    <div className={styles.menuItems}>
      <MenuItem icon={engine} />
      <MenuItem icon={wheel} />
      <MenuItem icon={gear} />
      <MenuItem icon={tools} />
    </div>
  )
}

export default MenuItems
