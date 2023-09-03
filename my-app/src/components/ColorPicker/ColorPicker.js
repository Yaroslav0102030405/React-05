import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionInd: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionInd: index });
  };

  makeOptionsClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.activeOptionInd) {
      optionClasses.push('ColorPicker__option--active');
    }

    return optionClasses.join(' ');
  };

  render() {
    const { activeOptionInd} = this.state
    const { options} = this.props
    // высчисляемые свойства 
    const {label} = options[activeOptionInd]


    return (
      <div className="ColorPicker">
        <h2 className=".ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionsClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
