import {InputLabel, Select, MenuItem, FormControl, TextField, Button, SelectChangeEvent} from "@mui/material";
import {useCallback} from 'react';
import {useEquationStore} from "@/app/utils/store/equationFormStore";
import {Diffs} from "@/types/export";
import {shallow} from "zustand/shallow";
import {btnWhiteTheme} from "@/app/utils/consts/mui";

const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

function ModeEditor() {
    const [setEquationsSettings, storeCount, storeDiff, generate] = useEquationStore((state) => [state.setEquation, state.count, state.diff, state.generate], shallow)
    const handleSelectDiff = useCallback((e: SelectChangeEvent<Diffs>) => {
        setEquationsSettings(e.target.value as Diffs, storeCount)
    }, [storeCount])
    const handleSelectCount = useCallback((e: SelectChangeEvent<EquationsCountT>) => {
        setEquationsSettings(storeDiff, e.target?.value as EquationsCountT);
    }, [storeDiff])
    const handleSubmit = useCallback(() => {
        generate()
    }, [])
    return (  
        <div className="w-[80%] mx-auto pt-5 flex gap-x-5 items-center select-none">
            <FormControl className="w-[33.33%]">
                <InputLabel id="difficulty-label" >Difficulty</InputLabel>
                <Select
                    labelId="difficulty-label"
                    label="Difficulty"
                    value={storeDiff}
                    onChange={handleSelectDiff}
                >
                    <MenuItem value={0}>Easy</MenuItem>
                    <MenuItem value={1}>Medium</MenuItem>
                    <MenuItem value={2}>Hard</MenuItem>
                    <MenuItem value={3}>Impossible</MenuItem>
                </Select>
            </FormControl>
            <FormControl className="w-[33.33%]">
                <InputLabel id="count-label" >Equation's count</InputLabel>
                <Select
                    labelId="count-label"
                    label="Equation's count"
                    value={storeCount}
                    onChange={handleSelectCount}
                >{
                    nums.map((num, i) => (
                        <MenuItem key={i} value={num}>{num}</MenuItem>
                    ))
                 }
                </Select>
            </FormControl>
            <Button variant='contained' color="primary" sx={btnWhiteTheme} size="large" onClick={handleSubmit}>Regenerate</Button>
        </div>
    );
}

export default ModeEditor;