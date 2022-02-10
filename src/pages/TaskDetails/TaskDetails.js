import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../../hooks';
import { getTaskByID } from '../../api';
import { ROUTES } from '../../router';
import Button from 'react-bootstrap/Button';

export function TaskDetails() {
  const { taskID } = useParams();
  const { data } = useFetch(() => getTaskByID(taskID), [taskID]);

  return (
    <div>
      {data?.title}
      {data?.description}

      <Link to='/'>
        <Button>back</Button>
      </Link>
    </div>
  );
}
