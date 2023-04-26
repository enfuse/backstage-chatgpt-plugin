import { BackstageOverrides } from '@backstage/core-components';
import { BackstageOverrides as CatalogReactOverrides } from '@backstage/plugin-catalog-react';
import {
  BackstageTheme,
  createTheme,
  darkTheme
} from '@backstage/theme';

import { alpha } from '@material-ui/core/styles';



const baseTheme = createTheme({
  palette: {
    ...darkTheme.palette,
    primary: {
      main: '#f1f1f1',
    },
    secondary: {
      main: '#FF5630',
    },
    error: {
      main: '#FF5630',
    },
    warning: {
      main: '#FFAB00',
    },
    success: {
      main: '#36B37E',
    },
    info: {
      main: '#0000FF',
    },
    navigation: {
      ...darkTheme.palette.navigation,
      background: '#172B4D',
      color: '#FFFFFF',
      indicator: '#2684FF',
      navItem: {
        hoverBackground: '#FFFFFF',
      },
    },
    text: {
      primary: '#172B48',
    },
    background: {
      default: '#5b5b5b',
    },
  },
  defaultPageTheme: 'home',
});

const createCustomThemeOverrides = (
  theme: BackstageTheme,
): BackstageOverrides & CatalogReactOverrides => {
  return {
    BackstageHeaderLabel: {
      label: {
        color: theme.page.fontColor,
      },
      value: {
        color: alpha(theme.page.fontColor, 0.8),
      },
    },
    BackstageHeaderTabs: {
      defaultTab: {
        fontSize: 'inherit',
        textTransform: 'none',
      },
    },
    BackstageOpenedDropdown: {
      icon: {
        '& path': {
          fill: '#FFFFFF',
        },
      },
    },
    BackstageTable: {
      root: {
        '&> :first-child': {
          borderBottom: '1px solid #D5D5D5',
          boxShadow: 'none',
        },
        '& th': {
          borderTop: 'none',
          textTransform: 'none !important',
        },
      },
    },
    CatalogReactUserListPicker: {
      title: {
        textTransform: 'none',
      },
    },
  };
};

export const darkerTheme: BackstageTheme = {
  ...baseTheme,
  overrides: {
    ...baseTheme.overrides,
    ...createCustomThemeOverrides(baseTheme),
  },
};