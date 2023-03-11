import React from 'react';
import './Button.css'
const Button = ({children}) => {
    return (
      <div>
        <button class="button">
          <span class="button_lg">
            <span class="button_sl"></span>
            <span class="button_text">{children}</span>
          </span>
        </button>
      </div>
    );
};

export default Button;