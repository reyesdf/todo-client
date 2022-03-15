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
    // console.log('clicked');
    axios
      .post('http://localhost:5000/todo', {
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
      .get('http://localhost:5000/')
      .then(function (response: any) {
        // handle success
        console.log(response.data.todos);
      })
      .catch(function (error: any) {
        // handle error
        console.log(error);
      });
  }, [todo]);

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
        <CustomCard header='Test Header' body='Test Body' />
      </Box>
    </Box>
  );
}

export default App;
