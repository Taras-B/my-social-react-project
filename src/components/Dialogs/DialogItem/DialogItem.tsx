import React from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

interface IProps {
  id: number
  name: string
}

const DialogItem: React.FunctionComponent<IProps> = ({ id, name }) => {
  let path = '/dialogs/' + id

  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink activeClassName={s.activeLink} to={path}>
        {name}
      </NavLink>
    </div>
  )
}

export default DialogItem
