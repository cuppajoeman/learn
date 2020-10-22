import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from './Title'
import { useQuery, gql, useMutation } from '@apollo/client'

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  navLink: {
    textDecoration: 'none',
  },
})

const GET_COUNT_QUERY = gql`
  {
    userCount
  }
`

const CREATE_AOS = gql`
    mutation CREATE_AOS($title: String) {
      createAreaOfStudy(title: $title) {
        title
      }
    }
`;

export default function Deposits() {
  const classes = useStyles()

  const { loading, error, data } = useQuery(GET_COUNT_QUERY)
  const { AOS, title } = useMutation(CREATE_AOS)
  if (error) return <p>Error</p>
  return (
    <React.Fragment>
      <Title>Total Users</Title>
      <Typography component="p" variant="h4">
        {loading ? 'Loading...' : data.userCount}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        users found
      </Typography>
      <div>
        <Link to="/users" className={classes.navLink}>
          View users
        </Link>
      </div>
      <button onclick= "AOS({ variables: { title: 'Mathematix'}})">plz fuxing work</button>
    </React.Fragment>
  )
}
