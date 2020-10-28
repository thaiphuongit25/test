import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <div className={showHideClassName}>
                    <div className="modal-container">
                        {children}
                        <a href="javascript:;" className="modal-close" onClick={handleClose}>
                        close
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
