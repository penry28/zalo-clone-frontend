import { HiOutlineUserAdd } from 'react-icons/hi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

function ContactSearch() {
    return (
        <div className="contact-search">
            <div className="group-search"></div>
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
