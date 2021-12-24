import {
  Chip
} from '@mui/material';
import { withStyles } from '@mui/styles';

const styles = {
  root: {
    backgroundColor: '#2c698d',
    color: 'white'
  }
};

const DayChip = withStyles(styles)(Chip);

export default DayChip;
