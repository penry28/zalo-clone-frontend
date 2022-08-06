import PropTypes from 'prop-types';
import ChatMessage from '../ChatMessage';

function ChatItem({ owner, avatar, messages }) {
    return (
        <div className={`chat-item ${owner}`}>
            <div className="chat-avatar">
                <img className="avatar__photo" src={avatar} alt="Avatar" />
            </div>
            <div className={`chat-content ${owner}`}>
                {messages &&
                    messages.map((message) => (
                        <ChatMessage key={message.id} owner={owner} content={message.content} />
                    ))}
            </div>
        </div>
    );
}

ChatItem.defaultProps = {
    owner: '',
};

ChatItem.propTypes = {
    owner: PropTypes.string,
    avatar: PropTypes.string,
    messages: PropTypes.array,
};

export default ChatItem;
