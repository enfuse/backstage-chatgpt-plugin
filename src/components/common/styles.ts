import { makeStyles } from "@material-ui/core/styles";
import { Theme } from '@material-ui/core';
export const useStyles = makeStyles<Theme>((theme: Theme)=> ({

    tableRow:{
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          }
    }
}))