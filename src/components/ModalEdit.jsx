import { createPortal } from "react-dom";

const ModalEdit = ({ intervalModal, valueModal, setValueModal }) => {
    return createPortal(
        <section className="modal-edit">
            <header className="edit-header">
                <h5>Edite la  tarea: </h5>
            </header>
            <textarea className="modal-textarea" id="edit-textarea" value={valueModal.text}
                onChange={e => {
                    let newValue = {...valueModal}
                    newValue.text = e.target.value
                    setValueModal(newValue);
                }}
            ></textarea>
            <button className="modal-close" onClick={intervalModal}>Actualizar</button>
        </section>,
        document.getElementById("modal")
    )
}

export { ModalEdit };