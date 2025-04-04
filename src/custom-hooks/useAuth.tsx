import { useDispatch } from "react-redux";
import { v4 as uuid4 } from "uuid";
import { addTask } from "../features/taskSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { AppDispatch } from "../features/Store"; // Import Redux dispatch type

// Define TypeScript types for form fields
interface TaskFormData {
  title: string;
  description: string;
  status?: string;
}

const useFormHandler = () => {
  const dispatch: AppDispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm<TaskFormData>();
        
  const onSubmit: SubmitHandler<TaskFormData> = (data) => {
    const newTask = {
      id: uuid4(),
      title: data.title,
      description: data.description,
      status: data.status || "To Do",
    };

    dispatch(addTask(newTask));
    reset(); // Clears the form fields after submission
  };

  return { register, handleSubmit, reset, onSubmit };
};

export default useFormHandler;
