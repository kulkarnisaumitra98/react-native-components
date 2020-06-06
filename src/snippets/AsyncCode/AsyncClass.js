import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchDummyData } from '../../store/actions/asyncActions';

class AsyncClass extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    await this.props.dispatch(fetchDummyData());

    this.setState({ data: this.props.data });
  };

  render() {
    return (
      <View>
        <Text>Class Component</Text>
        {this.state.data ? (
          this.state.data.map((item) => (
            <Text key={item.id}>{item.employee_name}</Text>
          ))
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
    );
  }
}

export default connect((state) => state)(AsyncClass);
