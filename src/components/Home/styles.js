import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  mainContainer: {
    marginTop: '120px'
   
},
[theme.breakpoints.down('sm')]:{
    mainContainer: {  
      marginTop: '100px',
      flexDirection:"column-reverse"
  },
  },
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    
  },
  searchButton:{
  
    color: 'white'
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    marginTop: '120px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
      marginTop: '100px',
    },
  },
 
}));