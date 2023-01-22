import { useState } from "react";
import {FormControlLabel, Typography,Slider, Paper, Radio, RadioGroup, Box } from "@mui/material";

import "./FilterMenu.scss";
import { Stack } from "@mui/system";

export default function MenuFiler() {
  const [valueRange, setValueRange] = useState(999);
  const [valueOrderBy, setValueOrderBy] = useState("asc");

  const handleChangeRange = (event, newValue) => {
    setValueRange(newValue);
  };

  return (
    <Paper elevation={1}>
      <Box sx={{p:2}}>
          <Typography variant="h6">Filter By Price</Typography>
          <Stack direction="row" spacing={2} sx={{alignItems:'center'}}>
            <Slider
                value={valueRange}
                getAriaLabel={() => "Range Price"}
                onChange={handleChangeRange}
                valueLabelDisplay="auto"
                max={999}
            />
            <Typography variant='body2'>{valueRange}</Typography>
          </Stack>
        <Box>
          <Typography variant="h6">Order By</Typography>
          <RadioGroup
            value={valueOrderBy}
            onChange={(e) => setValueOrderBy(e.target.value)}
          >
            <FormControlLabel
              value="asc"
              control={<Radio size="small" />}
              label={"Price (Lowest first)"}
            />
            <FormControlLabel
              value="desc"
              control={<Radio size="small" />}
              label={"Price (Highest first)"}
            />
          </RadioGroup>
        </Box>
      </Box>
    </Paper>
  );
}
