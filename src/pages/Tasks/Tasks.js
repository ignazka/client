import React from 'react';
import { getTasks } from '../../api';
import { useFetch } from '../../hooks';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Tasks() {
  const { data, loading, error } = useFetch(getTasks);
  const [state, setState] = React.useState(data);

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
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
