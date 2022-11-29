import React from 'react';

const CORAL = 'coral';
const AQUA = 'aqua';
const BISQUE = 'bisque';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorShow: '',
    };
  }
  setText = (color) => {
    this.setState({
      colorShow: color,
    });
  };
  render() {
    return (
      <>
        <div className="picker__title">{this.state.colorShow}</div>
        <div>
          <button
            onMouseOver={() => this.setText(CORAL)}
            onMouseOut={() => this.setText('')}
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseOver={() => this.setText(AQUA)}
            onMouseOut={() => this.setText('')}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseOver={() => this.setText(BISQUE)}
            onMouseOut={() => this.setText('')}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </>
    );
  }
}

export default ColorPicker;
