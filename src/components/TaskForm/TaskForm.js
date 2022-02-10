import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { createTask } from '../../api';
import { useHistory } from 'react-router-dom';

function TaskForm() {
  const [state, setState] = React.useState({ title: '', description: '' });
  const history = useHistory();
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    createTask(state);
    history.push('/');
  };
  return (
    <div>
      <p>TESATSETSET</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor='title'>Title</Form.Label>
          <Form.Control
            required
            value={state.title}
            onChange={handleChange}
            name='title'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='description'>Description</Form.Label>
          <Form.Control
            value={state.description}
            onChange={handleChange}
            name='description'
          />
        </Form.Group>
        <Button type='submit'>Create Task</Button>
      </Form>
    </div>
  );
}

export default TaskForm;
