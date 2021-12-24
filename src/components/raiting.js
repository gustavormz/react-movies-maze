import { Star } from '@mui/icons-material';
import { withStyles } from '@mui/styles';

const styles = {
  colorPrimary: {
    color: 'red'
  },
  colorSecundary: {
    color: 'black'
  }
};

const RaitingIcon = withStyles(styles)(Star);

export default RaitingIcon;
