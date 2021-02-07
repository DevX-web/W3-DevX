import { useState } from 'react';
import {
  Modal,
  Button,
  Divider,
  Input,
  Badge,
  Avatar,
  Spacer,
  Text,
} from '@geist-ui/react';

function CrimeReportInfo() {
  const [state, setState] = useState(false);
  const handler = () => setState(true);
  const closeHandler = () => setState(false);

  return (
    <div>
      <Button auto onClick={handler}>
        Show Modal
      </Button>
      <Modal open={state} onClose={closeHandler} width="35rem">
        <Modal.Title>crime report</Modal.Title>
        <Modal.Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae
            elementum. Varius vel pharetra vel turpis nunc.
          </p>
          <Badge type="warning">Traffic Jam</Badge>
          <Badge type="error">Severe</Badge>
          <Divider />
          <Input placeholder="add new comment" width="100%" />
          <Spacer y={1} />
          <div
            style={{
              display: 'flex',
              // justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
              marginBottom: '5px',
            }}
          >
            <Avatar src={`https://react.geist-ui.dev/images/avatar.png`} />
            <span>this is an existing comment</span>
          </div>
          <div
            style={{
              display: 'flex',
              // justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <Avatar src={`https://react.geist-ui.dev/images/avatar.png`} />
            <span>this is an existing comment</span>
          </div>
        </Modal.Content>
        <Modal.Action passive onClick={() => setState(false)}>
          Close
        </Modal.Action>
        <Modal.Action>Mark as spam</Modal.Action>
      </Modal>
    </div>
  );
}

export default CrimeReportInfo;
