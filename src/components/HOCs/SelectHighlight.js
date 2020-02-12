import React from 'react';

export default SelectHightlight = (WrappedComponent, optionArr) => {

    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                selecState: this.createArray(props.index),
                selectedIndex: props.index,
            };
        }

        createArray = (startIndex) => {
            const arr = new Array(optionArr.length).fill(false)
            arr[startIndex] = true

            return arr
        }

        handlePress = (i) => {
            let arr = new Array(optionArr.length).fill(false)
            arr[i] = true

            this.setState({
                selecState: [...arr],
                selectedIndex: i,
            })
        }

        renderComponents = (Comp, currentSelectedIndex, otherProps) => {    
            return (
                <React.Fragment>
                    {this.state.selecState.map((state, i) => { 
                        return (
                        <Comp
                            key={i}
                            currentSelectedIndex={currentSelectedIndex}
                            selected={state}
                            handlePress={this.handlePress}
                            index={i}
                            {...optionArr[i]}
                            {...otherProps}
                        />
                    )})}
                </React.Fragment>
            )
        }

        render() {
            return (
                <WrappedComponent
                    selected={this.state.selectedIndex}
                    handlePress={this.handlePress}
                    renderComponents={this.renderComponents}
                    {...this.props}
                />
            )
        }
    }
}