import {
  TouchableOpacityOnPress,
  StyView,
} from './../../../types/common_types';

export interface CommonModalProps {
  title: string;
  index: number;
  rows: { title: string, label: string }[];
  visible: boolean;

  handlePressOnPicker: TouchableOpacityOnPress;
  handlePressModalOption: (index: number) => void;
  hideModal: () => void;

  modalContStyle?: StyView;
}
