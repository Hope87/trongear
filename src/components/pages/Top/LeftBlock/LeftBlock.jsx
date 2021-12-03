import React from 'react'
import BlockRow from '../BlockRow/BlockRow'
import styles from './LeftBlock.module.scss'
import BlockTitle from '../BlockTitle/BlockTitle'

const LeftBlock = () => {
  return (
    <div className={styles.leftBlock}>
      <BlockTitle />
      <BlockRow leftBlockColor='red' />
      <BlockRow leftBlockColor='light grey' />
      <BlockRow leftBlockColor />
      <BlockRow />
      <BlockRow />
      <BlockRow />
      <BlockRow />
    </div>
  )
}

export default LeftBlock
