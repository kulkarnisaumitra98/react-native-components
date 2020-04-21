/* eslint-disable react/destructuring-assignment */
import React from 'react';

const SelectHightlight = (WrappedComponent) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selecState: this.createArray(props.index),
      selectedIndex: props.index,
    };
  }

        createArray = (startIndex) => {
          const arr = new Array(this.props.optionArr.length).fill(false);
          arr[startIndex] = true;

          return arr;
        }

        handlePress = (i) => {
          const arr = new Array(this.props.optionArr.length).fill(false);
          arr[i] = true;

          this.setState({
            selecState: [...arr],
            selectedIndex: i,
          });
        }

        renderComponents = (Comp, currentSelectedIndex, otherProps) => (
          <>
            {this.state.selecState.map((state, i) => (
              <Comp
                key={i}
                currentSelectedIndex={currentSelectedIndex}
                selected={state}
                handlePress={this.handlePress}
                index={i}
                {...this.props.optionArr[i]}
                {...otherProps}
              />
            ))}
          </>
        )

        render() {
          return (
            <WrappedComponent
              selected={this.state.selectedIndex}
              handlePress={this.handlePress}
              renderComponents={this.renderComponents}
              {...this.props}
            />
          );
        }
};

export default SelectHightlight;
