/**
 * Available colors palette.
 */
const colors = {
  primary: '#02717A',
  secondary: '#910C5D',
  textPrimary: '#2B313F',
  textSecondary: '#6E6E6E',
  gray0: '#F8F7F8',
  gray1: '#EBEBEB',
  gray2: '#E4E4E4',
  gray3: '#B7BBC9',
  gray4: '#9B9B9B',
  gray5: '#B3C1CB',
};

/**
 * Application theme.
 */
const theme = {
  colors,
  Input: {
    placeholderTextColor: colors.gray3,
    inputStyle: {
      fontSize: 16,
    }
  }
};

export default theme;