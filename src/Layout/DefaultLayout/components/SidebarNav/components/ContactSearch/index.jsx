import { HiOutlineUserAdd } from 'react-icons/hi';
import { AiOutlineUsergroupAdd, AiOutlineSearch } from 'react-icons/ai';

function ContactSearch() {
    return (
        <div className="contact-search">
            <div className="group-search">
                <div>
                    <AiOutlineSearch className="group-search__icon" />
                </div>
                <span
                    className="fake-textholder"
                    data-translate-inner="STR_SEARCH"
                    style={{
                        display: 'flex',
                        height: '90%',
                    }}
                >
                    Tìm kiếm
                </span>
                <input
                    className="contact-search-input"
                    autoComplete="off"
                    tabIndex="-1"
                    type="text"
                    maxLength="100"
                />
            </div>
            <div
                className="icon-item"
                data-icon="add-new-friend"
                title="Thêm bạn"
                data-translate-title="STR_CONTACT_ADD_FRIEND"
            >
                <HiOutlineUserAdd />
            </div>
            <div
                className="icon-item"
                data-icon="create-new-group"
                title="Tạo nhóm chat"
                data-translate-title="STR_CREATE_CHAT_GROUP"
            >
                <AiOutlineUsergroupAdd />
            </div>
        </div>
    );
}

export default ContactSearch;
