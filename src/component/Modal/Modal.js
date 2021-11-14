import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root')

export default class Modal extends Component{
     
    componentDidMount() {
        window.addEventListener('click', this.onCloseByClick)
        window.addEventListener('keydown', this.onCloseByKedown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onCloseByKedown)
    }

    onCloseByClick = (e) => {
        if (e.target.nodeName === "DIV") {
            this.props.onClose()
        }
    }

    onCloseByKedown = (e) => {
        if (e.code === 'Escape') {
            this.props.onClose()
        }
    }

    render() {
        const { onClose, src, alt } = this.props

        return createPortal(
            <div className="Overlay" onClose={onClose}>
                <div className="Modal">
                    <img
                        src={src}
                        alt={alt}
                    />
                </div>
            </div>,
            modalRoot
        )
    }
    
}

Modal.propTypes = {
  onClose: PropTypes.func,
}