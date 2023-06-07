import {TasksStateType} from "./tasks/tasks.api.ts/tasks.api";
import {todolistsReducer, todoThunk} from "./Todolist/todolists-reducer";
import {tasksReducer} from "./tasks/tasks-reducer";
import {TodolistDomainType, TodolistType} from "./Todolist/todokists.api.ts/todokists.api";


test('ids should be equals', () => {
    const startTasksState: TasksStateType = {};
    const startTodolistsState: Array<TodolistDomainType> = [];

    let todolist: TodolistType = {
        title: 'new todolist',
        id: 'any id',
        addedDate: '',
        order: 0
    }

    const action = todoThunk.addTodolist.fulfilled(
        {todolist}, '', {title: todolist.title});

    const endTasksState = tasksReducer(startTasksState, action)
    const endTodolistsState = todolistsReducer(startTodolistsState, action)

    const keys = Object.keys(endTasksState);
    const idFromTasks = keys[0];
    const idFromTodolists = endTodolistsState[0].id;

    expect(idFromTasks).toBe(action.payload.todolist.id);
    expect(idFromTodolists).toBe(action.payload.todolist.id);
});
