import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainContainer: {
        marginTop: '120px'

    },
    [
        theme
            .breakpoints
            .down('sm')
    ]: {
        mainContainer: {
            marginTop: '100px',
            flexDirection: "column-reverse"
        }
    },

    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2)
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1)
        }
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#00684A'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    switch: {
        color: '#00684A',
        cursor: 'pointer'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#00684A',
        color: 'white'
    },
    googleButton: {
        marginBottom: theme.spacing(2),
        backgroundColor: '#00684A',
        color: 'white'

    }
}));