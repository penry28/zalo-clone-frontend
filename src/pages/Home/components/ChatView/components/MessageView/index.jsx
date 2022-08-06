import ChatItem from '../ChatItem';

function MessageView() {
    return (
        <div className="message-view">
            <div className="message-view__blur__overlay"></div>
            <div className="message-view-container">
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <div className="message-view__scroll__inner">
                        <div
                            style={{
                                height: 'calc(100vh - 68px - 60px)',
                                overflowY: 'scroll',
                                padding: '10px 0',
                            }}
                        >
                            <ChatItem
                                avatar="https://s120-ava-talk.zadn.vn/0/6/5/6/55/120/e4f5c5870bc438bd2598692dee25f798.jpg"
                                messages={[
                                    { id: 1, content: 'What is your name?' },
                                    { id: 2, content: 'What is your name?' },
                                ]}
                            />
                            <ChatItem
                                avatar="https://s120-ava-talk.zadn.vn/0/6/5/6/55/120/e4f5c5870bc438bd2598692dee25f798.jpg"
                                owner="me"
                                messages={[
                                    { id: 1, content: 'What is your name?' },
                                    { id: 2, content: 'What is your name?' },
                                ]}
                            />
                            <ChatItem
                                avatar="https://s120-ava-talk.zadn.vn/0/6/5/6/55/120/e4f5c5870bc438bd2598692dee25f798.jpg"
                                messages={[
                                    { id: 1, content: 'What is your name?' },
                                    { id: 2, content: 'What is your name?' },
                                ]}
                            />
                            <ChatItem
                                avatar="https://s120-ava-talk.zadn.vn/0/6/5/6/55/120/e4f5c5870bc438bd2598692dee25f798.jpg"
                                owner="me"
                                messages={[
                                    { id: 1, content: 'What is your name?' },
                                    { id: 2, content: 'What is your name?' },
                                ]}
                            />
                            <ChatItem
                                avatar="https://s120-ava-talk.zadn.vn/0/6/5/6/55/120/e4f5c5870bc438bd2598692dee25f798.jpg"
                                messages={[
                                    { id: 1, content: 'What is your name?' },
                                    { id: 2, content: 'What is your name?' },
                                ]}
                            />
                            <ChatItem
                                avatar="https://s120-ava-talk.zadn.vn/0/6/5/6/55/120/e4f5c5870bc438bd2598692dee25f798.jpg"
                                messages={[
                                    { id: 1, content: 'What is your name?' },
                                    { id: 2, content: 'What is your name?' },
                                ]}
                            />
                            <ChatItem
                                avatar="https://s120-ava-talk.zadn.vn/0/6/5/6/55/120/e4f5c5870bc438bd2598692dee25f798.jpg"
                                messages={[
                                    { id: 1, content: 'What is your name?' },
                                    { id: 2, content: 'What is your name?' },
                                ]}
                            />
                            <ChatItem
                                avatar="https://s120-ava-talk.zadn.vn/0/6/5/6/55/120/e4f5c5870bc438bd2598692dee25f798.jpg"
                                messages={[
                                    { id: 1, content: 'What is your name?' },
                                    { id: 2, content: 'What is your name?' },
                                ]}
                            />
                            <ChatItem
                                avatar="https://s120-ava-talk.zadn.vn/0/6/5/6/55/120/e4f5c5870bc438bd2598692dee25f798.jpg"
                                messages={[
                                    { id: 1, content: 'What is your name?' },
                                    { id: 2, content: 'What is your name?' },
                                ]}
                            />
                            <ChatItem
                                avatar="https://s120-ava-talk.zadn.vn/0/6/5/6/55/120/e4f5c5870bc438bd2598692dee25f798.jpg"
                                owner="me"
                                messages={[
                                    { id: 1, content: 'What is your name?' },
                                    { id: 2, content: 'What is your name?' },
                                ]}
                            />
                            <ChatItem
                                avatar="https://s120-ava-talk.zadn.vn/0/6/5/6/55/120/e4f5c5870bc438bd2598692dee25f798.jpg"
                                owner="me"
                                messages={[
                                    { id: 1, content: 'What is your name?' },
                                    { id: 2, content: 'What is your name?' },
                                ]}
                            />
                            <ChatItem
                                avatar="https://s120-ava-talk.zadn.vn/0/6/5/6/55/120/e4f5c5870bc438bd2598692dee25f798.jpg"
                                owner="me"
                                messages={[
                                    { id: 1, content: 'What is your name?' },
                                    { id: 2, content: 'What is your name?' },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessageView;
