export interface IUserDto {
    name: string;
    email: string;
    password: string;
}

export interface ITodoDto {
    title: string;
    isCompleted: boolean;
    userId: string;
    createdAt: string;
    _id: string;
}