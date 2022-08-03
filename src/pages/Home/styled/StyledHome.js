import styled from "styled-components";

const StyledHome = styled.main`
    & {
        display: flex;
        position: relative;
        z-index: 10;
        overflow: hidden;
        flex: 1;
        background: #fff;
    }
    .main-center {
        transition: width .25s;
        transition-timing-function: step-end;
        animation-duration: .5s;
        display: flex;
        flex: 1;
        flex-flow: column nowrap;

        .header {
            display: flex;
            flex-flow: row nowrap;
            height: 68px;
            padding: 0 16px;
            background-position: 100%;
            background-repeat: no-repeat;
            background-color: #fff;
            width: 100%;
            box-sizing: border-box;
            flex: 0 0 auto;
            align-items: center;
            justify-content: space-between;
            .thread-chat {
                display: flex;
                flex: 1;
                align-items: center;
                position: relative;
                flex-flow: row nowrap;
                .thread-chat__avatar {
                    position: relative;
                    cursor: pointer;
                }
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
                    cursor: pointer;
                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        object-fit: cover;
                    }
                }
                .thread-chat__title {
                    position: relative;
                    margin-left: 12px;
                    margin-right: 18px;
                    .main-title-container {
                        flex-wrap: nowrap;
                        overflow: hidden;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        flex-flow: row nowrap;
                        .header-title {
                            font-weight: 600;
                            font-size: 18px;
                            color: #001a33;
                            padding-left: 0;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                            min-width: 0;
                            cursor: default;
                            height: 28px;
                            overflow: visible;
                        }
                    }
                    .sub-title-container {
                        .header-subtitle {
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                            display: block;
                            font-size: 14px;
                            color: #72808e;
                            line-height: normal;
                            font-weight: 400;
                            letter-spacing: normal;
                            font-size: 14px;
                        }
                    }
                }
            }
            .btns-wrap {
                display: flex;
                flex: 0 0 auto;
                align-items: center;
                flex-flow: row nowrap;
            }
            .header-btns {
                .btns-item {
                    display: flex;
                    align-items: center;
                    margin-right: 4px;
                    position: relative;
                    max-width: 32px;
                    height: 32px;
                    min-width: 32px;
                    font-weight: 600;
                    font-size: 14px;
                    letter-spacing: normal;
                    line-height: 30px;
                    background: transparent;
                    color: #394e60;
                    white-space: nowrap;
                    text-align: center;
                    border: none;
                    cursor: pointer;
                    user-select: none;
                    touch-action: manipulation;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: fit-content;
                    flex-shrink: inherit;
                    position: relative;
                    box-sizing: border-box;
                    transition: all .1s cubic-bezier(.645,.045,.355,1);
                    &:hover {
                        background: #eeeff2;
                    }
                    svg {
                        width: 1.4em;
                        height: 1.4em;
                    }
                }
            }
        }
    }
`;

export default StyledHome;
