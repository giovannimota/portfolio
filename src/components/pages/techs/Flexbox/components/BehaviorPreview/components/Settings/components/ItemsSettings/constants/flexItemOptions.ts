import { CheckBoxItem } from '@components/toolkit/CheckBox/types'

interface FlexItemOptions {
  width: CheckBoxItem[]
  height: CheckBoxItem[]
}

export const FLEX_ITEM_OPTIONS: FlexItemOptions = {
  width: [
    {
      label: 'Auto',
      value: 'auto'
    },
    {
      label: '100%',
      value: '100%'
    },
    {
      label: '5rem',
      value: '5rem'
    },
    {
      label: '10rem',
      value: '10rem'
    },
    {
      label: '15rem',
      value: '15rem'
    }
  ],
  height: [
    {
      label: 'Auto',
      value: 'auto'
    },
    {
      label: '100%',
      value: '100%'
    },
    {
      label: '5rem',
      value: '5rem'
    },
    {
      label: '10rem',
      value: '10rem'
    },
    {
      label: '15rem',
      value: '15rem'
    }
  ]
}
