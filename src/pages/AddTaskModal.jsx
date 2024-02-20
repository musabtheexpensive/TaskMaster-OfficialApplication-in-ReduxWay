import { useForm } from "react-hook-form";
import Modal from "../components/ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/features/tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    dispatch(addTask(data));
    onCancel();
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Whatever">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
          <label className="mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="w-full rounded-md"
            type="text"
            id="title"
            {...register("name")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="mb-2" htmlFor="title">
            Description
          </label>
          <textarea
            className="w-full rounded-md"
            type="text"
            id="description"
            {...register("description")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="mb-2" htmlFor="title">
            Deadline
          </label>
          <input
            className="w-full rounded-md"
            type="date"
            id="date"
            {...register("date")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="mb-2" htmlFor="title">
            Assign to
          </label>
          <select
            className="w-full rounded-md"
            id="assignedTo"
            {...register("assignedTo")}
          >
            <option value="Asif Al Mahi">Asif Al Mahi</option>
            <option value="Mir Hussain">Mir Hussain</option>
            <option value="Foycal Hossain">Foycal Hossain</option>
            <option value="Anisur Rahoman">Anisur Rahoman</option>
            <option value="Shafil Umami">Shafil Umami</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label className="mb-2" htmlFor="title">
            Property
          </label>
          <select
            className="w-full rounded-md"
            id="priority"
            {...register("priority")}
          >
            <option defaultValue value="high">
              High
            </option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="flex gap-3 justify-end">
          <button
            onClick={() => onCancel()}
            type="button"
            className="btn btn-danger"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
