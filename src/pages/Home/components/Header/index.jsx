import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BsCameraVideo } from 'react-icons/bs';

function Header() {
    return (
        <div className="header">
            <div className="thread-chat">
                <div className="thread-chat__avatar">
                    <div className="zl-avatar">
                        <img
                            className="zl-avatar__photo"
                            src="https://s120-ava-talk.zadn.vn/e/7/f/5/3/120/5a297e8d9ba5232f9362b183cfd2a58f.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="thread-chat__title">
                    <div className="main-title-container">
                        <div className="header-title">Đức Vinh</div>
                    </div>
                    <div className="sub-title-container">
                        <div className="subtitle header-subtitle">
                            <span>
                                <span data-translate-inner="STR_LAST_SEEN">Truy cập</span>{' '}
                                <span>
                                    36 <span data-translate-inner="STR_MIN_AGOS">phút trước</span>
                                </span>
                            </span>
                        </div>
                        <div className="new-separator"></div>
                    </div>
                </div>
            </div>
            <div className="header-btns">
                <div className="btns-wrap">
                    <div className="btns-item" title="Thêm bạn vào trò chuyện">
                        <AiOutlineUsergroupAdd />
                    </div>
                    <div className="btns-item" title="Cuộc gọi video">
                        <BsCameraVideo />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
