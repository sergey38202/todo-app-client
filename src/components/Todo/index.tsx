import React, {useState} from "react";
import CheckIcon from "../../assets/check-circle-svgrepo-com.svg";
import EditIcon from "../../assets/edit-svgrepo-com.svg";
import TrashIcon from "../../assets/trash-4-svgrepo-com.svg";
import {ITodoDto} from "../../types";
import {ITodoProps} from "./types";
import {getTodos} from "../../utils/getTodos";
import {axiosInstance} from "../../utils/axiosInstence";

const Todo = ({ title, isCompleted, _id, setTodos }: ITodoDto & ITodoProps) => {
    console.log('_id', _id);
    const [isEdit, setIsEdit] = useState(false);
    const [editValue, setEditValue] = useState(title);
    const handleEditTodo = () => {
        setIsEdit((prev) => !prev);
    };

    const handleGetEditTodoValue = (e: any) => {
        setEditValue(e.target.value);
    }

    const handleSetNewTodoValue = () => {
        axiosInstance.put(`/edit-todo?todoId=${_id}`,
            { title: editValue })
            .then(() => {
            getTodos().then((res) => {
                setTodos(res.data.message)
            }).then(() => {
                setIsEdit(false);
            })
        })
    }

    const handleCompleteTodo = () => {
        axiosInstance.put(`/edit-todo?todoId=${_id}`,
            { isCompleted: !isCompleted })
            .then(() => {
                getTodos().then((res) => {
                    setTodos(res.data.message)
                }).then(() => {
                    setIsEdit(false);
                })
        })
    };

    const handleRemoveTodo = () => {
        axiosInstance.delete(`/delete-todo?todoId=${_id}`)
            .then(() => {
                getTodos().then((res) => {
                    setTodos(res.data.message)
                }).then(() => {
                    setIsEdit(false);
                })
        })
    };

    return (
        <div className="flex items-center mb-[47px]">
            { isEdit ? (
                <input
                    type="text"
                    placeholder="Todo..."
                    className="mr-[10px] max-w-[600px] w-full p-[12px] bg-white"
                    value={editValue}
                    onChange={handleGetEditTodoValue}
                />
            ) : (
                <div
                    className={`mr-[10px] max-w-[600px] w-full p-[12px] bg-white ${isCompleted ? 'line-through' : 'no-line-through'}`}>
                    { title }
                </div>
            ) }
            { isEdit ? (
                <img
                    className="mr-[10px] cursor-pointer"
                    src={CheckIcon}
                    alt="edit"
                    width={30}
                    height={30}
                    onClick={handleSetNewTodoValue}
                />
            ) : (
                <img
                    className="mr-[10px] cursor-pointer"
                    src={EditIcon}
                    alt="edit"
                    width={30}
                    height={30}
                    onClick={handleEditTodo}
                />
            ) }
            <img
                className={`mr-[10px] cursor-pointer ${isEdit ? 'hidden' : 'block'}`}
                src={CheckIcon}
                alt="check"
                width={30}
                height={30}
                onClick={handleCompleteTodo}
            />
            <img
                className={`cursor-pointer ${isEdit ? 'hidden' : 'block'}`}
                src={TrashIcon}
                alt="remove"
                width={30}
                height={30}
                onClick={handleRemoveTodo}
            />
        </div>
    );
};

export default Todo;