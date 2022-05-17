import React from 'react';

function Modal({ dispatch }) {
  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Deleting a city</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => dispatch({ type: 'HIDE_MODAL' })}></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete the city?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Delete</button>
            <button onClick={() => dispatch({ type: 'HIDE_MODAL' })} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;