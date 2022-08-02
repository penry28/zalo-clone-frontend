import routes from './routes';
import { HiUser } from 'react-icons/hi';
import { MdFavorite } from 'react-icons/md';
import { IoStarHalf } from 'react-icons/io5';
import { IoMdClose, IoMdSettings, IoMdMail } from 'react-icons/io';

const accountTabs = [
    {
        path: routes.userEdit,
        key: 'manage-my-profile',
        name: 'Manage my profile',
        icon: <HiUser />,
    },
    {
        path: routes.userFavorite,
        key: 'my-favorites',
        name: 'My favorites',
        icon: <MdFavorite />,
    },
    {
        path: routes.userReview,
        key: 'my-reviews',
        name: 'My reviews',
        icon: <IoStarHalf />,
    },
    {
        path: routes.userBlackList,
        key: 'black-list',
        name: 'Black list',
        icon: <IoMdClose />,
    },
    {
        path: routes.userAccountSetting,
        key: 'account-settings',
        name: 'Account settings',
        icon: <IoMdSettings />,
    },
    {
        path: routes.userContact,
        key: 'contact-us',
        name: 'Contact us',
        icon: <IoMdMail />,
    },
];

export default accountTabs;
