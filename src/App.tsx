import React, { useState } from 'react';

//MUI
import { Box } from '@mui/material';
import { CustomInput } from './components/Input';
import { CustomButton } from './components/Button';
import { CustomSelect } from './components/Select';

function App() {
  const [todo, setTodo] = useState('');

  const onChangeHandler = (event: any) => {
    const task = event.target.value;
    setTodo(task);
    console.log(todo);
  };
  const tasksSubmitHandler = () => {
    console.log('clicked');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        maxWidth: 800,
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
      <CustomSelect label='Priority' sx={{ my: 1 }} />
      <CustomButton
        variant='contained'
        onClick={tasksSubmitHandler}
        label='Add Task'
      />
    </Box>
  );
}

export default App;
