function ChatInput() {
    return (
        <div className="chat-input">
            <div className="chat-input__content">
                <div className="chat-input__content__input">
                    <div id="chatInputv2">
                        <div className="chat-input-container">
                            <div className="chat-input-mainContent">
                                <textarea
                                    name=""
                                    className="chat-input-control"
                                    placeholder="Nhập @, tin nhắn tới  Cloud của tôi"
                                ></textarea>
                            </div>
                            <div className="chat-input-btns">
                                <div className="input-btn">
                                    <div className="send-btn-chatbar">
                                        <div className="imgHolder">
                                            <span
                                                className="emoji-sizer emoji-outer "
                                                style={{
                                                    background:
                                                        'url("https://chat.zalo.me/assets/emoji.1e7786c93c8a0c1773f165e2de2fd129.png?v=20180604") 84% 82.5% / 5100%',
                                                    margin: '0px',
                                                    width: '24px',
                                                    height: '24px',
                                                    position: 'relative',
                                                    top: '-2px',
                                                }}
                                            >
                                                /-strong
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatInput;
