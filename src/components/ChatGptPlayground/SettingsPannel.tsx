import { FormControl, InputLabel, MenuItem, Select, Slider } from '@material-ui/core'
import React from 'react'
import { SettingsPannelPrpps } from './types'
import "../common/styles.css"

export const SettingsPanel = ({temperature, maxTokens, setTemperature, setMaxTokens}: SettingsPannelPrpps) => {
    const [standardTemperature, setStandardTemperature] = React.useState<number>(0.8)
    const [standardMaxLength, setStandardMaxLength] = React.useState<number>(0.8)
    const handleChange = (callback: React.Dispatch<React.SetStateAction<number>>, value: number | number[]) => {
      callback(value as number);
    };
  
    const convertTemperature = (regularTemperature:number) => {
      regularTemperature > 0 ? setStandardTemperature( regularTemperature / 100 ) : setStandardTemperature(0) 
    }
    const convertLength = (regularLength:number) => {
      regularLength > 0 ? setStandardMaxLength(regularLength * 40) : setStandardMaxLength(0)
    }
  
    React.useEffect(() => {
      convertTemperature(temperature)
      convertLength(maxTokens)
    }, [temperature,maxTokens])
    return (
        <div className='settings'>
          <h2>Settings</h2>
          <ModuleSetting/>
          <p><b>Temperature: {standardTemperature}</b></p>
          <Slider aria-label="Volume" value={temperature} onChange={(e,n)=>handleChange(setTemperature,n) }/>
          <p><b>Max Tokens: {standardMaxLength}</b></p>
          <Slider aria-label="Volume" value={maxTokens} onChange={(e,n)=>handleChange(setMaxTokens,n) }/>
      </div>
    )
  }

const ModuleSetting = () => {
  return (
    <FormControl disabled>
    <InputLabel className='settings-module-label' id="setting-module-label">Model</InputLabel>
    <Select
          labelId="settings-module-label"
          id="settings-module"
          value={'default'}
          label="Age"
        >
          <MenuItem value="default">
            <em>gpt-3.5-turbo</em>
          </MenuItem>
        </Select>
  </FormControl>
  )
}