import { css } from 'styled-components'

const theme = {
  colors: {
    primary: '#106ec7',

    background: {
      surface: '#0E5EAA',
      hover: '#093F71'
    },

    text: {
      title: '#FFFFFF',
      primary: '#EDEDED',
      secondary: '#999999',
      disabled: '#666666',
      placeholder: '#444444'
    },

    border: {
      default: '#3B3B3B',
      primary: '#094882'
    },

    black: '#000000',
    white: '#FFFFFF',

    scrollbar: '#106ec7'
  }
}

export const ScrollStyles = css`
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-track:hover {
    background-color: transparent;
  }

  ::-webkit-scrollbar-track:active {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.scrollbar};
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.scrollbar};
  }

  ::-webkit-scrollbar-thumb:active {
    background-color: ${({ theme }) => theme.colors.scrollbar};
  }

  scrollbar-width: 8px;
  scrollbar-color: ${({ theme }) => theme.colors.scrollbar} transparent;
`

export default theme
