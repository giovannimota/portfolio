import { CheckBoxItem } from '@components/toolkit/CheckBox/types'

interface FlexboxOptions {
  flexDirection: CheckBoxItem[]
  alignItems: CheckBoxItem[]
  justifyContent: CheckBoxItem[]
}

export const FLEXBOX_OPTIONS: FlexboxOptions = {
  flexDirection: [
    {
      label: 'Row',
      value: 'row'
    },
    {
      label: 'Row Reverse',
      value: 'row-reverse'
    },
    {
      label: 'Column',
      value: 'column'
    },
    {
      label: 'Column Reverse',
      value: 'column-reverse'
    }
  ],
  alignItems: [
    {
      label: 'Flex Start',
      value: 'flex-start'
    },
    {
      label: 'Flex End',
      value: 'flex-end'
    },
    {
      label: 'Center',
      value: 'center'
    },
    {
      label: 'Baseline',
      value: 'baseline'
    },
    {
      label: 'Stretch',
      value: 'stretch'
    }
  ],
  justifyContent: [
    {
      label: 'Flex Start',
      value: 'flex-start'
    },
    {
      label: 'Flex End',
      value: 'flex-end'
    },
    {
      label: 'Center',
      value: 'center'
    },
    {
      label: 'Space Between',
      value: 'space-between'
    },
    {
      label: 'Space Around',
      value: 'space-around'
    },
    {
      label: 'Space Evenly',
      value: 'space-evenly'
    }
  ]
}
