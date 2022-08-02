import { StyledHome } from './styled';
import { Header, ChatView } from './components';

function Home() {
    return (
        <StyledHome>
            <div id="chatViewContainer" className="main-center">
                <Header />
                <ChatView />
            </div>
        </StyledHome>
    );
}

export default Home;
