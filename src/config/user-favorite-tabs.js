import routes from "./routes";

const userFavoriteKey = 'user-favorite';
const userFavoriteAgency = 'user-favorite.agency';
const userFavoriteClub = 'user-favorite.club';

const userFavoriteTabs = [
    {
        path: routes.userFavorite,
        key: userFavoriteKey,
        name: 'Escorts',
    },
    {
        path: `${routes.userFavorite}?tab=agency`,
        key: userFavoriteAgency,
        name: 'Agencies',
    },
    {
        path: `${routes.userFavorite}?tab=club`,
        key: userFavoriteClub,
        name: 'Clubs',
    }
];

export { userFavoriteKey, userFavoriteAgency, userFavoriteClub };
export default userFavoriteTabs;
