"use client"
import styled from "@emotion/styled";
import { InputLabel, Select, MenuItem, FormControl, TextField } from "@mui/material";
import { FormEvent, useState } from 'react';

const TextFieldOverrideWrapper = styled.div`
    & > div {
        height: 100%;
        & > div {
            height: 100%;
            font-size: 20px;
            padding-left: 15px;
        }
    }
`

function ModeEditor() {
    const [diff, setDiff] = useState(0)
    const [equationsCount, setEquationsCount] = useState<string | undefined >()
    const handle = (e: any) => {
        setDiff(e.target?.value);
    }

    return (  
        <div className="w-[80%] mx-auto pt-5 flex gap-x-5">
            <FormControl className="w-[33.33%]">
                <InputLabel id="difficulty-label" >Difficulty</InputLabel>
                <Select
                    labelId="difficulty-label"
                    label="Difficulty"
                    value={diff} 
                    onChange={handle}
                >
                    <MenuItem value={0}>Easy</MenuItem>
                    <MenuItem value={1}>Medium</MenuItem>
                    <MenuItem value={2}>Hard</MenuItem>
                    <MenuItem value={3}>Impossible</MenuItem>
                </Select>
            </FormControl>
            <TextFieldOverrideWrapper>
                <TextField value={equationsCount}
                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => setEquationsCount(e.target?.value)}
                    variant="standard" type="number" label="Equations count" />
            </TextFieldOverrideWrapper>
        </div>
    );
}

export default ModeEditor;