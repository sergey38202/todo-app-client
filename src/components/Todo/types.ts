import {ITodoDto} from "../../types";
import {Dispatch, SetStateAction} from "react";

export interface ITodoProps {
    setTodos: Dispatch<SetStateAction<[] | ITodoDto[]>>;
}