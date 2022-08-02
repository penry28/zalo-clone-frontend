import routes from "./routes";
import { MdMessage } from 'react-icons/md';
import { IoMdHelpCircle } from 'react-icons/io';

const tabs = [
    {
        path: routes.userContact,
        icon: <MdMessage />,
        key: 'contact-us',
        name: 'Contact us',
    },
    {
        path: `${routes.userContact}?tab=faq`,
        icon: <IoMdHelpCircle />,
        key: 'faq',
        name: 'Help for Members',
    },
];

export default tabs;
