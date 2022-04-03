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
  const [todoData, setTodoData] = useState<any[]>([]);

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
        setTodoData(response.data.todos);
      })
      .catch(function (error: any) {
        // handle error
        console.log(error);
      });
  }, [todoData]);

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
        {todoData.length > 0 ? (
          todoData.map((todos) => (
            <CustomCard
              key={todos.id}
              header={todos.todo}
              body={todos.priority}
            />
          ))
        ) : (
          <h1>No Todos</h1>
        )}
      </Box>
    </Box>
  );
}

export default App;
