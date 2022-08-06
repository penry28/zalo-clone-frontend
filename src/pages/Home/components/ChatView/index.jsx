import { MessageView, ChatTools, ChatInput } from './components';
import { StyledChatView } from './styled';

function ChatView() {
    return (
        <StyledChatView className="chat-view">
            <MessageView />
            <ChatTools />
            <ChatInput />
        </StyledChatView>
    );
}

export default ChatView;
