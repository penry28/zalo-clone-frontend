import PropTypes from 'prop-types';

function MsgItem({ avatar, title, status, content }) {
    return (
        <div className="msg-item">
            <div className="conv-item">
                <div className="conv-item__avatar">
                    <div className="zl-avatar">
                        <img src={avatar} alt={title} />
                    </div>
                </div>
                <div className="conv-item__status" data-status={status}></div>
                <div className="conv-item__content">
                    <div className="conv-item__title">
                        <span className="truncate">{title}</span>
                    </div>
                    <div className="conv-item__body">
                        <span className="truncate">{content}</span>
                    </div>
                </div>
                <div className="conv-item__setting"></div>
            </div>
        </div>
    );
}

MsgItem.propTypes = {
    avatar: PropTypes.string,
    status: PropTypes.number,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
};

export default MsgItem;
