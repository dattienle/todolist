import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
// import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { todosRemainingSelector } from '../../redux/selectors';

// Toolkit

import todoListSlice from './todosSlice'

export default function TodoList() {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('Medium');

  // sử dụng selector nó giúp lấy ra 1 phần của kho mà k cần lấy cả kho
  // nhưng nếu viết như vậy thì khi các component khác muốn xài thì lại phải viết lại khó sửa 
  // const todoList = useSelector((state) => state.todolist)
  // vì thế ta tạo 1 componet chứa là phải selector.js
  // const todoList = useSelector(todoListSelector)
  const todoList = useSelector(todosRemainingSelector)
  // gọi thằng searchText từ useSelector
  // const searchText = useSelector(searchTextSelector)
  // console.log(searchText);
  const handleAddButtonClick = () => {
    // dispatch() để bắn đi 1 cái action => goi thằng rootReducer bên reducer.js
    // cái id thì mình tạo thư viện uuid 
    // Này là dispatch theo kiểu thường
    // dispatch(  
    //   addTodo({
    //   id: uuidv4(),
    //   name: todoName,
    //   priority: priority,
    //   completed: false,
    // }))

    // Toolkit lại action
    dispatch(  
        todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      }))
    setTodoName('')
    setPriority('Medium')
  }
  const handleInputChange = (e) => {

    setTodoName(e.target.value);
  }

  const handlePriorityChange = (value) => {
    setPriority(value)
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* Khúc này mình k có để dữ liệu hardcode mà thay vào đó lấy dữ liệu từ kho chung sử dụng useSelector */}
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {todoList.map(todo => <Todo key={todo.id} id={todo.id} name={todo.name} completed={todo.completed} prioriry={todo.priority} />)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
