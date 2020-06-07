import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchDummyData } from '../../store/actions/asyncActions';
import useRenderCount from '../../hooks/useRenderCount';

const AsyncFunctional = (props) => {
  const [stateData, setData] = useState(null);
  const { data, dispatch } = props;

  const func = async () => {
    await dispatch(fetchDummyData());
    console.log(data, 'func data'); // -> prints null
    setData(data);
  };

  useEffect(() => {
    func();
  }, []);

  useRenderCount('Functional');

  return (
    <View style={styles.container}>
      <Text>Functional Component</Text>
      {stateData ? (
        stateData.map((item) => <Text key={item.id}>{item.employee_name}</Text>)
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
