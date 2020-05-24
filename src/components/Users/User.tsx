import React, { FC } from 'react'

import style from './users.module.css'
import userPhoto from '../../assets/ava-img.jpg'
import { NavLink } from 'react-router-dom'
import {
  Grid,
  CardMedia,
  CardContent,
  Button,
  CardActions,
  Typography,
  Card,
} from '@material-ui/core'
import { UserType } from '../../types/types'

type PropsType = {
  user: UserType
  followingInProgress: Array<number>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}

const User: FC<PropsType> = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div className={style.userItem}>
      <Card className={style.cardItems}>
        <div className={style.details}>
          <CardActions className={style.cardHeader}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              src={`${user.photos.small != null ? user.photos.small : userPhoto}`}
              title="Contemplative Reptile"
            />

            <CardContent style={{ paddingBottom: 0 }}>
              {user.followed ? (
                <Button
                  disabled={followingInProgress.some((id) => id === user.id)}
                  onClick={() => {
                    unfollow(user.id)
                  }}>
                  Unfollow
                </Button>
              ) : (
                <Button
                  disabled={followingInProgress.some((id) => id === user.id)}
                  onClick={() => {
                    follow(user.id)
                  }}>
                  Follow
                </Button>
              )}
            </CardContent>
          </CardActions>

          <CardContent>
            <Grid item>
              <NavLink to={'/profile/' + user.id} className={style.navLink}>
                <Typography variant="subtitle1">{user.name}</Typography>
              </NavLink>
              {user.status && <Typography variant="body1">Status: {user.status}</Typography>}
            </Grid>
            <div>{'user.location.city'}</div>
            <div>{'user.location.country'}</div>
            <span></span>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}

export default User
