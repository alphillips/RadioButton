import React from 'react'
import {render} from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {RadioButtonGroup} from 'material-ui/RadioButton'

import RadioButton from '../../src'

let Demo = React.createClass({
  render() {
    return(
    <MuiThemeProvider>
      <RadioButtonGroup name="printIndicator">
        <RadioButton
          value="AUTO"
          label="Automatic"
        />
        <RadioButton
          value="MANUAL"
          label="Hold"
        />
      </RadioButtonGroup>
    </MuiThemeProvider>
    )
  }
})

render(<Demo/>, document.querySelector('#demo'))
