import styled from 'styled-components';

const StyledSidebarNav = styled.div`
    & {
        width: 408px;
        height: 100%;
        display: flex;
        flex-flow: row nowrap;
    }

    /* main-tab */
    .main-tab {
        z-index: 11;
        width: 64px;
        flex: none;
        box-sizing: border-box;
        background: #0091ff;
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-flow: column nowrap;

        .nav__tabs__zalo {
            height: 88px;
            justify-content: center;
            display: flex;
            padding-top: 32px;
            box-sizing: border-box;

            .zl-avatar {
                width: 48px;
                height: 48px;
                font-size: 24px;
                margin: 0;
                padding: 0;
                color: #fff;
                text-align: center;
                position: relative;
                border-radius: 50%;
                flex: none;
                box-shadow: 0 0 0 1px #fff;
            }

            .zl-avatar__photo {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                object-fit: cover;
            }
        }

        .leftbar-tab {
            padding: 18px;
            margin-right: 0px;
            background: #006edc;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            cursor: pointer;
            svg {
                font-size: 24px;
                width: 1.2em;
                height: 1.2em;
                fill: #fff;
            }
            .truncate {
                display: none;
            }
        }
    }

    /* menu-tab */
    .menu-tab {
        z-index: 5;
        display: flex;
        flex: 1 1 auto;
        flex-flow: column nowrap;
        position: relative;
        overflow: hidden;

        .contact-search {
            height: 64px;
            min-height: 64px;
            position: relative;
            background-color: #fff;
            transition: visibility 0s,opacity .5s linear;
            display: flex;
            overflow: visible;
            margin: 0 16px;
            align-items: center;
            flex-flow: row nowrap;
        }

        .group-search {
            position: relative;
            display: flex;
            height: 32px;
            margin-left: 0;
            .fake-textholder {
                width: calc(100% - 52px);
                color: #72808e;
                position: absolute;
                left: 32px;
                background: transparent;
                pointer-events: none;
                width: calc(100% - 68px);
                visibility: visible;
                bottom: 0;
                display: list-item;
                height: 100%;
                padding: 2px 0;
                vertical-align: bottom;
                font-weight: 300;
                font-size: 1.5rem;
            }
            .contact-search-input {
                height: 30px;
                line-height: 30px;
                background-color: #e8eaef;
                border: 1px solid #e8eaef;
                line-height: normal;
                font-weight: 400;
                font-size: 15px;
                letter-spacing: normal;
                border-radius: 16px;
                width: calc(100% - 5px);
                padding: 0 30px;
            }
            .group-search__icon {
                position: absolute;
                top: 0px;
                line-height: normal;
                font-weight: 400;
                font-size: 14px;
                letter-spacing: normal;
                color: #72808e;
                bottom: 0;
                width: 1.2em;
                height: 1.2em;
                margin: auto 12px;
            }
        }

        .icon-item {
            max-width: 32px;
            padding: 0;
            border-radius: 20px;
            height: 32px;
            min-width: 32px;
            font-weight: 600;
            font-size: 14px;
            letter-spacing: normal;
            line-height: 30px;
            margin-left: 4px;
            background: transparent;
            color: #394e60;
            white-space: nowrap;
            text-align: center;
            border: none;
            cursor: pointer;
            user-select: none;
            touch-action: manipulation;
            display: flex;
            align-items: center;
            justify-content: center;
            width: fit-content;
            width: -moz-fit-content;
            flex-shrink: inherit;
            &:hover {
                background: #eeeff2;
            }
            svg {
                width: 1.2em;
                height: 1.2em;
            }
        }
    }


    /* menu-control-group */
    .menu-control-group {
        height: 100%;
        display: flex;
        flex: 1;
        flex-flow: column nowrap;
        .msg-filters-bar {
            border: none;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            flex-flow: row nowrap;
            .filters-menu {
                height: 100%;
                width: 100%;
                display: flex;
                flex-flow: row nowrap;
                height: 40px;
                line-height: normal;
                font-weight: 600;
                font-size: 14px;
                letter-spacing: normal;
                border-bottom: 1px solid #e1e4ea;
                box-sizing: border-box;
                width: 100%;
                align-items: center;
                padding: 0 15px;
                .menu__item {
                    margin-right: 10px;
                    color: #72808e;
                    cursor: pointer;
                    font-size: 1.3rem;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    &.selected {
                        color: #0068ff;
                        border-bottom: 2px solid #0068ff;
                    }
                }
            }
        }
    }

    /* conversation-list-id */
    .conversation-list-id {
        position: relative;
        display: block;
        flex: 2 1 0%;
        .virtualized-scroll {
            position: relative;
            overflow-x: scroll;
            width: 344px;
            height: calc(100vh - 91px);
        }
        .msg-item {
            height: 72px;
            left: 0px;
            top: 72px;
            width: 100%;
            .conv-item {
                position: relative;
                height: 100%;
                padding: 0 16px;
                contain: size style;
                transition: all .2s linear;
                display: flex;
                cursor: pointer;
                .conv-item__avatar {
                    position: relative;
                    align-items: center;
                    margin: 0 8px 0 0;
                    display: flex;
                    justify-content: center;
                    flex-flow: row nowrap;
                    .zl-avatar {
                        background: transparent;
                        width: 48px;
                        height: 48px;
                        font-size: 24px;
                        line-height: 48px;
                        margin: 0;
                        padding: 0;
                        color: #fff;
                        text-align: center;
                        position: relative;
                        border-radius: 50%;
                        flex: none;
                        box-shadow: 0 0 0 1px #fff;
                        img {
                            width: 100%;
                            height: 100%;
                            border-radius: 50%;
                            object-fit: cover;
                        }
                    }
                }
                .conv-item__status {
                    position: absolute;
                    top: 43px;
                    left: 44px;
                    z-index: 1;
                }
                .conv-item__content {
                    position: relative;
                    width: calc(100% - 56px);
                    display: flex;
                    justify-content: center;
                    flex-flow: column nowrap;
                    .conv-item__title {
                        margin-top: 0px;
                        justify-content: space-between;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        position: relative;
                        flex-flow: row nowrap;
                        .truncate {
                            line-height: normal;
                            font-weight: 500;
                            font-size: 16px;
                            letter-spacing: normal;
                            color: #001a33;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                            display: block;
                            flex: 1;
                            font-weight: 400;
                            font-size: 1.4rem;
                        }
                    }
                    .conv-item__body {
                        padding-top: 0px;
                        margin-top: 4px;
                        justify-content: space-between;
                        height: 18px;
                        display: flex;
                        align-items: center;
                        flex-flow: row nowrap;
                        .truncate {
                            width: calc(100% - 36px);
                            display: flex;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                            word-wrap: break-word;
                            align-items: center;
                            flex-flow: row nowrap;
                            font-size: 1.2rem;
                            font-weight: 300;
                        }
                    }
                }
            }
        }
    }
`;

export default StyledSidebarNav;