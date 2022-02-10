import React from 'react';
import { getTasks } from '../../api';
import { useFetch } from '../../hooks';
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom';
import { deleteTask } from '../../api';

function Tasks() {
  const { data, loading, error } = useFetch(() => getTasks(), [getTasks()]);
  const [state, setState] = React.useState(data);

  const handleClick = ({ target }) => {
    deleteTask(target.value);
    setState(data);
  };
  return (
    <div className='ctn-task'>
      {data?.map(task => (
        <div className='card-task' key={task._id}>
          <div className='card-left'>
            <p>{task.title}</p>
          </div>
          <div className='card-right'>
            <Link to={`/tasks/${task._id}`}>
              {' '}
              <Button variant='outline-light' size='sm'>
                details{' '}
              </Button>
            </Link>
            <Button onClick={handleClick} value={task._id}>
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
