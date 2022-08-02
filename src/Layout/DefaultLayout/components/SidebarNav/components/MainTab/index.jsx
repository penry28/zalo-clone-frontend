import { BiMessageRoundedDetail } from 'react-icons/bi';

function MainTab() {
    return (
        <div className="main-tab">
            <div>
                <div className="nav__tabs__zalo" title="Pham Dinh Hung">
                    <div
                        className="zl-avatar clickable zl-avatar--l"
                        style={{ background: 'transparent' }}
                    >
                        <img
                            className="zl-avatar__photo"
                            src="https://s120-ava-talk.zadn.vn/8/f/0/3/6/120/54a8a326a966d7422dfa20a9c81f7401.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="nav__tabs__top">
                    <div className="clickable leftbar-tab">
                        <BiMessageRoundedDetail />
                        <div
                            className="lb-tab-title truncate"
                            data-translate-inner="STR_TAB_MESSAGE"
                        >
                            Tin nhắn
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav__tabs__bottom"></div>
        </div>
    );
}

export default MainTab;
