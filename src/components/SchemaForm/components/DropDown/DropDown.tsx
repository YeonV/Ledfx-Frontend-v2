// import {
//   Autocomplete,
//   Checkbox,
//   ListItemText,
//   MenuItem,
//   Select,
//   TextField,
//   ToggleButton,
//   ToggleButtonGroup
// } from '@mui/material'
// import { useMemo, useState } from 'react'
import { EffectDropDownProps } from './DropDown.props'
// import useStyles from './DropDown.styles'
import EffectTypeDialog from '../../../Dialogs/EffectTypeDialog'

const EffectDropDown = ({
  value = '',
  onChange = undefined,
  title = 'Effect Type',
  groups = {
    'Group 1': [
      {
        name: 'Item 1',
        id: 'item1',
        category: 'Group 1'
      },
      {
        name: 'Item2',
        id: 'item2',
        category: 'Group 1'
      }
    ],
    'Group 2': [
      {
        name: 'Item 1',
        id: 'item11',
        category: 'Group 2'
      }
    ]
  },
  showFilter = false
}: EffectDropDownProps) => {
  return (
    <>
      {/* test */}
      <EffectTypeDialog
        title={title}
        value={value}
        onChange={onChange}
        groups={groups}
        showFilter={showFilter}
      />
    </>
  )
}

export default EffectDropDown
