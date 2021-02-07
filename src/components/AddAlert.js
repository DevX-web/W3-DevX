import { Input, Spacer, Dot, Text, Code, Button } from '@geist-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddAlert = () => {
  // const [value, setValue] = useState()
  // const handler = (e) => {
  //   setValue(e.target.value)
  //   console.log(e.target.value)
  // }

  const { register, handleSubmit, errors } = useForm({ criteriaMode: 'all' });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Evil Rabbit"
        width="50%"
        name="Name"
        ref={register({ required: true })}
      >
        Address
      </Input>
      <Spacer />
      <Input
        placeholder="Post title"
        width="50%"
        name="Address"
        ref={register({ required: true })}
      >
        Details
      </Input>
      <Spacer />
      <Input
        placeholder="GitHub Actions"
        width="50%"
        name="Details"
        ref={register({ required: true })}
      >
        Severity
      </Input>
      <Spacer />
      <Button htmlType="submit">Submit</Button>
    </form>
  );
};

export default AddAlert;
