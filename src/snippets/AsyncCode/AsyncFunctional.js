import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchDummyData } from '../../store/actions/asyncActions';

const AsyncFunctional = (props) => {
  const [data, setData] = useState(null);

  const func = async () => {
    await props.dispatch(fetchDummyData());
    setData(props.data);
  };
  useEffect(() => {
    func();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Functional Component</Text>
      {data ? (
        data.map((item) => <Text key={item.id}>{item.employee_name}</Text>)
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default connect((state) => state)(AsyncFunctional);
