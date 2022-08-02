import routes from "./routes";
import { BiUserX } from 'react-icons/bi';

const tabs = [
    {
        path: routes.blackList,
        name: 'Blacklisted profiles',
        icon: <BiUserX />
    },
    {
        path: routes.blackListAgency,
        name: 'Blacklisted agencies',
        icon: <BiUserX />

    },
    {
        path: routes.blackListClient,
        name: 'Blacklisted clients',
        icon: <BiUserX />
    }
];

export default tabs;
