import React from 'react';
import { buttonThemes } from './App';
import ThemeContext from './ThemeContext';

function HeaderButton() {
  
  const themeContext = React.useContext(ThemeContext);
 //const contextType = ThemeContext;
  return (
    <div>
      
        <button style={themeContext}>Press me</button>
      
    </div>
  );
}

export default HeaderButton;
