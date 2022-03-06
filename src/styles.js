import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },

    title: {
        flexGrow: 1
    },
    appBar: {
        borderRadius: 5,
        marginBottom: '150px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    mainContainer: {
        marginTop: '150px',
       
       
    },
    [theme.breakpoints.down('sm')]:{
      mainContainer: {  
        marginTop: '100px',
        flexDirection:"column-reverse"
    },
    },
    heading: {
        color: 'white',
        fontSize: '30px'
    },
    image: {
        marginLeft: '15px'
    },
    
}));
