import Modal from "../components/ui/Modal";

const AddTaskModal = ({isOpen,setIsOpen}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Whatever">
      <p>lorem</p>
    </Modal>
  );
};

export default AddTaskModal;
