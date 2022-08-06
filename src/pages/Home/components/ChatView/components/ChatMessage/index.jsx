import PropTypes from 'prop-types';

function ChatMessage({ content, owner }) {
    return (
        <div className={`chat-message wrap-message ${owner}`}>
            <div
                className="wrap"
                style={{
                    display: 'flex',
                    width: '100%',
                }}
            >
                <div className={`chat-card ${owner}`}>
                    <div>{content}</div>
                </div>
            </div>
        </div>
    );
}

ChatMessage.defaultProps = {
    owner: '',
};
ChatMessage.propTypes = {
    content: PropTypes.string,
    owner: PropTypes.string,
};

export default ChatMessage;
