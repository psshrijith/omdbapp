import React from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-opacity-50 z-50 bg-slate-900/70 backdrop-brightness-75">
            <div className="relative bg-black bg-opacity-20 rounded-lg p-6 h-140 w-200 border border-gray-700">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl"
                    aria-label="Close"
                >
                    ✕
                </button>
                <div className="mt-2">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;