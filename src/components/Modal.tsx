const Modal = ({
  setOpenModal,
  handleModal,
  infosModal,
}: {
  setOpenModal: any;
  handleModal: any;
  infosModal: {
    task: { id: number; title: string; completed: boolean; status: string };
    msg: string;
    title: string;
  };
}) => {
  return (
    <div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-lightest rounded-md p-5 flex flex-col gap-3 z-50">
        <h2 className="font-bold text-xl">{infosModal.title}</h2>
        <div className="h-px w-full bg-contrast"></div>
        <p>{infosModal.msg}</p>
        <p className="w-full font-semibold">- {infosModal.task.title}</p>
        <div className="w-full grid grid-cols-1 tablet:grid-cols-2 gap-3 mt-3">
          <button
            onClick={() => setOpenModal(false)}
            className="rounded-md py-1 hover:underline transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleModal}
            className="order-first tablet:order-last bg-contrast text-lightest rounded-md py-1 hover:bg-contrast/80 hover:scale-101 transition-all"
          >
            Save
          </button>
        </div>
      </div>

      <div className="w-screen h-screen fixed top-0 left-0 z-40 bg-darkest opacity-50"></div>
    </div>
  );
};

export default Modal;
