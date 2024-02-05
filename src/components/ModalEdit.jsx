import { createPortal } from "react-dom";

const ModalEdit = ({ intervalModal, valueModal, setValueModal, onlyClose }) => {
    return createPortal(
        <form className="modal-edit">
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
            <footer className="modal-footer">
                <button type="button" className="modal-close modal-cancel" onClick={onlyClose}>Cancelar</button>
                <button type="button" className="modal-close" onClick={intervalModal}>Actualizar</button>
            </footer>
        </form>,
        document.getElementById("modal")
    )
}

export { ModalEdit };