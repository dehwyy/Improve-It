'use client'
import { InputLabel, Select, MenuItem, FormControl, Button, SelectChangeEvent } from '@mui/material'
import { useCallback, useEffect } from 'react'
import { useEquationStore, useEquationResultsStore } from '@/app/utils/store/equationStore'
import { Diffs } from '@/types/export'
import { shallow } from 'zustand/shallow'
import { btnWhiteTheme } from '@/app/utils/consts/mui'
const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
function ModeEditor() {
  const [setEquationsSettings, storeCount, storeDiff, generate, trigger] = useEquationStore(
    state => [state.setEquation, state.count, state.diff, state.generate, state.trigger],
    shallow
  )
  const reset = useEquationResultsStore(state => state.resetCount)
  const generateHandler = useCallback(() => {
    generate()
  }, [])
  useEffect(() => {
    reset()
  }, [trigger, storeDiff, storeCount])
  return (
    <div className="w-[80%] mx-auto pt-5 flex sm:flex-col gap-5 items-center select-none">
      <FormControl className="w-[33.33%] sm:w-full">
        <InputLabel id="difficulty-label">Difficulty</InputLabel>
        <Select
          labelId="difficulty-label"
          label="Difficulty"
          value={storeDiff}
          onChange={e => setEquationsSettings(e.target.value as Diffs, storeCount)}>
          <MenuItem value={0}>Easy</MenuItem>
          <MenuItem value={1}>Medium</MenuItem>
          <MenuItem value={2}>Hard</MenuItem>
          <MenuItem value={3}>Impossible</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="w-[33.33%] sm:w-full">
        <InputLabel id="count-label">Equation's count</InputLabel>
        <Select
          labelId="count-label"
          label="Equation's count"
          value={storeCount}
          onChange={e => setEquationsSettings(storeDiff, e.target?.value as EquationsCountT)}>
          {nums.map((num, i) => (
            <MenuItem key={i} value={num}>
              {num}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" sx={btnWhiteTheme} size="large" onClick={generateHandler}>
        Regenerate
      </Button>
    </div>
  )
}

export default ModeEditor
