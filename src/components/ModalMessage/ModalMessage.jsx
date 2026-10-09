import './ModalMessage.scss';

function ModalMessage({ status, onClose }) {
    if (!status) {
      return null; // Don't render anything if status is not provided
    } 

    const isSuccess = status === "success";

    return (
        <div 
            className="modal-message"
            onClick={onClose}
        >
            <div 
                className="modal-message__content"
                onClick={(e) => e.stopPropagation()}  // Prevent closing when clicking inside the modal
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-message-title"
            >
                <button 
                    className="modal-message__close"
                    type="button"
                    onClick={onClose}
                    aria-label="Закрыть окно"
                >
                    &times;
                </button>
                <div 
                    className={`modal-message__icon ${
                        isSuccess ? 'success' : 'error'
                    }`}
                >
                    {isSuccess ? (
                        <span role="img" aria-label="Успех">✓</span>
                    ) : (
                        <span role="img" aria-label="Ошибка">!</span>
                    )}
                </div>
                <h2 id="modal-message-title">
                    {isSuccess 
                        ? 'Спасибо за обращение!' 
                        : 'Не удалось отправить сообщение.'}
                </h2>
                <p>
                    {isSuccess 
                        ? 'Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.' 
                        : 'Попробуйте ещё раз или свяжитесь с нами другим способом.'}
                </p>
                <button 
                    className="modal-message__button btn btn-red"
                    type="button"
                    onClick={onClose}
                >
                    ОК
                </button>
            </div>
        </div>
    );
}

export default ModalMessage;