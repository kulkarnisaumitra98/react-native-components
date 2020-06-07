import React, { useState } from 'react';
import { Text } from 'react-native';
import usePickerModal from '../../hooks/usePickerModal';
import FlexedContainer from '../../components/Containers/FlexedContainer';
import ModalAndPicker from '../../components/General/ModalAndPicker/ModalAndPicker';

const options = [
  { label: 'One', value: 1 },
  { label: 'Two', value: 2 },
  { label: 'Three', value: 3 },
];

const ModalPickerExample = (props) => {
  const [state, setstate] = useState(null);

  const {
    setIndex, // Set the index from after click Option from modalPicker
    hideModal,
    showModal,
    picker, // The picker objecct which has index and visible property
  } = usePickerModal((pickerIndex) => setstate(pickerIndex)); // We pass the function which gets executed on picker index change

  return (
    <FlexedContainer>
      <Text>{state}</Text>
      <ModalAndPicker
        {...picker}
        handlePressOnPicker={showModal}
        hideModal={hideModal}
        handlePressModalOption={(index) => setIndex(index)}
        rows={options}
        title={'Hello'}
      />
    </FlexedContainer>
  );
};

export default ModalPickerExample;
