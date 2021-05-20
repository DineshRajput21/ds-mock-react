import { Card,  makeStyles, Container } from "@material-ui/core";
import PropTypes from 'prop-types';

const useCardTitleStyles = makeStyles((theme) => ({
    root: {
        background: 'red',
    },
    container:{
        width: '85.8%',
        paddingLeft: '24px',
        paddingRight: '24px',
        margin: '0 auto',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            paddingLeft: '12px',
          },
    },
    title: {
        fontFamily: 'Source Sans Pro,san-serif !important',
        fontSize: '16px !important',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.5,
        letterSpacing: '-0.1px',
        color: '#444444 !important',
        margin: '0px'
    }
}));
const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: '0 2px 6px -1px #eee,0 0 0 0 #eee,0 4px 2px 0 #eee !important',
    },
    container: {
        padding: '9px 9px 9px 0px !important',
        display: 'flex !important',
        alignItems: 'center',
        marginLeft: '0 !important',
    }
}));

function InfoNotification({ content, icon, ...props }) {

    const classes = useStyles();
    const cardHeaderClasses = useCardTitleStyles();
    return (


        <Card className={classes.root}  >
            <div className={cardHeaderClasses.container}>

                <Container className={classes.container}>
                    <div id="banner-icon">
                        <img alt="Info" src={icon} height={35} width={35} />
                    </div>
                    <p className={cardHeaderClasses.title}>{content}</p>
                </Container>
            </div>
        </Card>

    )
}

InfoNotification.propTypes = {
    content: PropTypes.string,
    icon: PropTypes.string,

}
InfoNotification.defaultProps = {
    content: '20% perpetual premium discount applies with a minimum of S$500 annual premium.',
}

export default InfoNotification;