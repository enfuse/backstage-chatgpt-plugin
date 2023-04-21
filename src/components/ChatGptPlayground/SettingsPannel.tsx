import { FormControl, InputLabel, MenuItem, Select, Slider } from '@material-ui/core'
import React, { useContext } from 'react'
import "../common/styles.css"
import PlaygroundContext, { UPDATE_MAX_TOKENS, UPDATE_TEMPERATURE } from './PlaygroundContext'

export const SettingsPanel = () => {
  const { state, dispatch } = useContext(PlaygroundContext);
    return (
        <div className='settings'>
          <h2>Settings</h2>
          <ModuleSetting/>
          <p><b>Temperature: {state.temperature}</b></p>
          <Slider aria-label="Volume" value={state.temperature * 100} onChange={(_, value) => dispatch({type: UPDATE_TEMPERATURE, payload: {temperature: (value as number) / 100}})}/>
          <p><b>Max Tokens: {state.maxTokens}</b></p>
          <Slider aria-label="Max Tokens" value={state.maxTokens / 40} onChange={(_,value)=>dispatch({type: UPDATE_MAX_TOKENS, payload: {maxTokens:( value as number)*40}})}/>
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