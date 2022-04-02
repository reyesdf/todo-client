import React, { useEffect, useState } from 'react';
//MUI
import { Box, SelectChangeEvent } from '@mui/material';
import { CustomInput } from './components/Input/Input';
import { CustomButton } from './components/Button/Button';
import { CustomSelect } from './components/Select/Select';
import { CustomCard } from './components/Card/Card';
const axios = require('axios').default;

function App() {
  const [todo, setTodo] = useState('');
  const [todoData, setTodoData] = useState([
    {
      id: '',
      todo: '',
      priority: '',
    },
  ]);
  const [priority, setPriority] = useState('');

  const onChangeHandler = (event: any) => {
    const task = event.target.value;
    setTodo(task);
  };

  const priorityChangeHandler = (event: SelectChangeEvent) => {
    setPriority(event.target.value as string);
    console.log(priority);
  };

  const tasksSubmitHandler = () => {
    axios
      .post('http://localhost:3001/todo', {
        todo: todo,
        priority: priority,
      })
      .then(function (response: any) {
        console.log(response);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get('http://localhost:3001')
      .then(function (response: any) {
        // handle success
        console.log(response.data.todos.id);
        setTodoData([
          {
            id: response.data.todos.id,
            todo: response.data.todos.todo,
            priority: response.data.todos.priority,
          },
        ]);
      })
      .catch(function (error: any) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        maxWidth: 300,
        mx: 'auto',
        mt: 5,
      }}
    >
      <CustomInput
        label='Tasks'
        variant='outlined'
        id='todo'
        sx={{ my: 1 }}
        value={todo}
        onChange={onChangeHandler}
      />
      <CustomSelect
        label='Priority'
        sx={{ my: 1 }}
        value={priority}
        onChange={priorityChangeHandler}
      />
      <CustomButton
        variant='contained'
        onClick={tasksSubmitHandler}
        label='Add Task'
      />
      <Box>
        {/* {todoData.map((todos) => (
          <CustomCard
            key={todos.id}
            header={todos.todo}
            body={todos.priority}
          />
        ))} */}

        {todoData.map((todo) => (
          <CustomCard key={todo.id} header={todo.todo} body={todo.priority} />
        ))}
      </Box>
    </Box>
  );
}

export default App;
