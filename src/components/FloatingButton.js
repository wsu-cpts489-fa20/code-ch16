import React from 'react';

class FloatingButton extends React.Component {
    render() {
      return(
        <div className="floatbtn">
          <a>
            <span className="floatbtn-icon fa fa-plus"></span>
          </a>
        </div>  
      );
    }
}

export default FloatingButton;
