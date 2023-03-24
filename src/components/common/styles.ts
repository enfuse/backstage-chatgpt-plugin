import { makeStyles } from "@material-ui/core/styles";
import { Theme } from '@material-ui/core';
export const useStyles = makeStyles<Theme>((theme: Theme)=> ({
    buttonSubmit: {
        // backgroundColor: "rgb(242,0,234)",
        "&:hover": {
            // cursor: "pointer",
            backgroundColor: "rgb(71, 164, 73)",
            color: "white"

      }
    },

    tableRow:{
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          }
    }
}))