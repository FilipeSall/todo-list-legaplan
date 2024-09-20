export interface TodoProps {
    task:string;
    isCompleted:boolean;
}

export interface TaskProps extends TodoProps {
    onComplete: () => void;
    onRemove: () => void;
}

export interface AddBtnProps {
    onClick:() => void;
}