import React from 'react';
import { buttonThemes } from './App';
import ThemeContext from './ThemeContext';

function HeaderButton() {
  
  const themeContext = React.useContext(ThemeContext);
 //const contextType = ThemeContext;
  return (
    <div>
      
        <button theme={themeContext}>Press me</button>
      
    </div>
  );
}

export default HeaderButton;
