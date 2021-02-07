import {
  Input,
  Spacer,
  Dot,
  Text,
  Code,
  Button,
  Select,
  Modal,
  useModal,
} from '@geist-ui/react';
import { AlertTriangle } from '@geist-ui/react-icons';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddAlert = () => {
  // const [value, setValue] = useState()
  // const handler = (e) => {
  //   setValue(e.target.value)
  //   console.log(e.target.value)
  // }

  const { register, handleSubmit, errors } = useForm({ criteriaMode: 'all' });
  const { visible, setVisible, bindings } = useModal();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Button auto onClick={() => setVisible(true)}>
        Report
      </Button>
      <Modal {...bindings}>
        <Modal.Title>Report</Modal.Title>
        <Modal.Content id="customModalSelect">
          <Select
            placeholder="Severity"
            initialValue="1"
            size="medium"
            getPopupContainer={() =>
              document.getElementById('customModalSelect')
            }
          >
            <Select.Option value="1">Low</Select.Option>
            <Select.Option value="2">Medium</Select.Option>
            <Select.Option value="3">High</Select.Option>
          </Select>
          <Spacer />
          <Input width="100%" />
          <Spacer />
          <Input width="100%" />
          <Spacer />
          <Input width="100%" />
        </Modal.Content>
        <Modal.Action passive onClick={() => setVisible(false)}>
          Cancel
        </Modal.Action>
        <Modal.Action onClick={onSubmit}>Submit</Modal.Action>
      </Modal>
    </form>
  );
};

export default AddAlert;
