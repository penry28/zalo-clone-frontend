import { MessageView, ChatTools, ChatInput } from './components';

function ChatView() {
    return (
        <div className="chat-view">
            <MessageView />
            <ChatTools />
            <ChatInput />
        </div>
    );
}

export default ChatView;
