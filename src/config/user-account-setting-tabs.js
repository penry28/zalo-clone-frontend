import routes from "./routes";
import { AiTwotoneSetting, AiFillMail, AiFillDelete } from 'react-icons/ai';

const tabs = [
    {
        path: routes.userAccountSetting,
        icon: <AiTwotoneSetting />,
        key: 'account-settings',
        name: 'Account settings',
    },
    {
        path: `${routes.userAccountSetting}?tab=updates`,
        icon: <AiFillMail />,
        key: 'admin-updates',
        name: 'Admin updates',
    },
    {
        path: `${routes.userAccountSetting}?tab=delete`,
        icon: <AiFillDelete />,
        key: 'delete-account',
        name: 'Delete account',
    }
];

export default tabs;
