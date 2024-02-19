import { useForm } from "react-hook-form";
import Modal from "../components/ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Whatever">
      <form onSubmit={() => handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} />
        <button type="submit">Submit</button>       
      </form>
    </Modal>
  );
};

export default AddTaskModal;
