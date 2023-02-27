import {InputLabel, Select, MenuItem, FormControl, TextField, Button, SelectChangeEvent} from "@mui/material";
import {useCallback, useState} from 'react';
import {useEquationStore} from "@/app/utils/store/equationFormStore";
import {Diffs} from "@/types/export";


const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

function ModeEditor() {
    const [diff, setDiff] = useState<Diffs>(Diffs.Easy)
    const [equationsCount, setEquationsCount] = useState<EquationsCountT>(10)
    const setEquationsSettings = useEquationStore(state => state.setEquation)
    const handleSelect = useCallback((e: SelectChangeEvent<Diffs>) => {
        setDiff(e.target.value as Diffs);
    }, [])

    const handleInputEq = useCallback((e: SelectChangeEvent<EquationsCountT>) => {
        setEquationsCount(e.target?.value as EquationsCountT);
    }, [])

    const handleSubmit = useCallback(() => {
        setEquationsSettings(diff, equationsCount)
    }, [diff, equationsCount])
    return (  
        <div className="w-[80%] mx-auto pt-5 flex gap-x-5 items-center">
            <FormControl className="w-[33.33%]">
                <InputLabel id="difficulty-label" >Difficulty</InputLabel>
                <Select
                    labelId="difficulty-label"
                    label="Difficulty"
                    value={diff} 
                    onChange={handleSelect}
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
                    value={equationsCount}
                    onChange={handleInputEq}
                >{
                    nums.map((num, i) => (
                        <MenuItem key={i} value={num}>{num}</MenuItem>
                    ))
                 }
                </Select>
            </FormControl>
            <Button variant='contained' color="primary" sx={{color: "black", "&:hover": {background: "rgb(56 189 248)"}}} onClick={handleSubmit}>Generate</Button>
        </div>
    );
}

export default ModeEditor;