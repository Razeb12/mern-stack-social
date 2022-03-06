import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 5,
        marginBottom: '150px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#00684A',
        padding: '0 80px',
        [theme.breakpoints.down('md')]: {
          // flexDirection: 'column',
          padding: '0 30px',
        
        },
        [theme.breakpoints.down('xs')]: {
          // flexDirection: 'column',
          padding: '0 2px',
        
        },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '200px',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
      marginTop: '5px',
      justifyContent: 'flex-end',
    },
  },
  logout: {
    marginLeft: '20px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  mainContainer: {
    marginTop: '150px',
   
   
},
iCon:{
cursor: 'pointer',
},


image2:{
  [theme.breakpoints.down('xs')]: {
    display: 'none'
  },
},
  heading: {
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
},
  image: {
    marginLeft: '10px',
    padding: "10px 0",
    
  
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
 
  },


  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-between"
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },
}));