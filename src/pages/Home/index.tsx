import React, {useEffect, useState} from "react";
import Header from "../../components/Header";
import Todo from "../../components/Todo";
import {ITodoDto} from "../../types";
import {axiosInstance} from "../../utils/axiosInstence";
import {getTodos} from "../../utils/getTodos";

const Home = () => {
    const [todos, setTodos] = useState<ITodoDto[] | []>([]);
    const [todo, setTodo] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [emptyTodoError, setEmptyTodoError] = useState(false);

    useEffect(() => {
        axiosInstance.get(`/todos?userId=${localStorage.getItem('profile')}`)
            .then((res) => {
            setTodos(res.data.message);
            setIsLoading(false);
            console.log(res);
        }).catch((error) => console.log(error))
            .finally(() => {
                setTodo('');
                setIsLoading(false);
                setEmptyTodoError(false);
            })
    }, [todos?.length]);

    const handleGetTodo = (e: any) => {
        setTodo(e.target.value);
    };

    const handleCreateTodo = (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        if (!todo) {
            setEmptyTodoError(true);
            setIsLoading(false);
        }
        axiosInstance.post(`/create-todo`, { title: todo })
            .then((res) => setTodos([...todos, res.data]))
            .then((res) => {
                getTodos().then((res) => {
                    setTodos(res.data.message);
                })
            })
            .catch((error) => console.log(error))
    };

    return (
        <form onSubmit={handleCreateTodo}>
            <Header />
            <div className={`mx-auto w-[400px] pt-[100px] pb-[50px] h-full`}>
                <div className="w-full flex">
                    <input
                        className="w-full outline-none pl-[10px]"
                        type="text"
                        placeholder="Create Todo"
                        value={todo}
                        onChange={handleGetTodo}
                    />
                    <button
                        className="bg-blue-400 pt-[13px] pr-[15px] pb-[13px] pl-[15px] rounded-[6px] text-white"
                        type="submit"
                    >
                        { isLoading ? 'Loading' : 'Add' }
                    </button>
                </div>
                { emptyTodoError && <p className={"mt-[15px] text-red-800"}>Enter value!</p> }
                <div className="w-full mt-[81px]">
                    { !!todos ? (
                        todos?.map((todo) => (
                            <Todo
                                key={todo.userId}
                                title={todo.title}
                                createdAt={todo.createdAt}
                                isCompleted={todo.isCompleted}
                                userId={todo.userId}
                                _id={todo._id}
                                setTodos={setTodos}
                            />
                        ))
                    ) : (
                        <p>No Todos yet</p>
                    ) }
                </div>
            </div>
        </form>
    );
}

export default Home;