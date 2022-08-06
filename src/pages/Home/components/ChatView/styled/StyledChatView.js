import styled from 'styled-components';

const StyledChatView = styled.div`
    & {
        width: 100%;
        height: calc(100% - 68px);
        display: flex;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        flex-flow: column nowrap;
    }
    /* message-view */
    .message-view {
        flex: 1 0 auto;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;

        &:after,
        &:before {
            position: absolute;
            border-top: 1px solid var(--grey-300);
            content: "";
            width: 100%;
        }

        &__blur__overlay {
            content: "";
            background: hsla(0,2%,90%,.43);
            z-index: -1;
            position: absolute;
            width: 100%;
            height: 100%;
            contain: strict;
        }

        &-container {
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 100%;
            flex: 1 1 auto;
            transition: .2s ease-out;
            contain: layout style size;
            bottom: 0;
        }

        &__scroll__inner {
            min-height: 100%;
            display: flex;
            margin-bottom: 28px;
            flex-direction: column;
            justify-content: flex-end;
            contain: layout style;
            overflow: hidden;
            background: linear-gradient(-21deg, #bfbfbf, #c5dff2);

            .chat {
                &-item {
                    margin: 0 16px 7px;
                    word-wrap: break-word;
                    contain: style;
                    word-break: break-all;
                    word-break: break-word;
                    display: flex;
                    flex-flow: row nowrap;
                    &.me {
                        margin: 0 15px 7px;
                        flex-flow: row-reverse nowrap;
                    }
                }
                &-avatar {
                    z-index: 1;
                    background: transparent;
                    width: 40px;
                    height: 40px;
                    font-size: 20px;
                    line-height: 40px;
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
                &-content {
                    margin: 0 0 0 10px;
                    max-width: calc(100% - 30px);
                    display: flex;
                    flex: 1 1 auto;
                    flex-flow: column nowrap;
                    &.me {
                        margin: 0 11px 0 0;
                    }
                }
                &-message {
                    display: -webkit-flex;
                    display: flex;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    justify-content: flex-start;
                    align-items: flex-start;
                    position: relative;
                    color: #001a33;
                    &.me {
                        justify-content: flex-end;
                        .wrap {
                            width: 100%;
                            display: flex;
                            justify-content: flex-end;
                        }
                    }
                }
                &-card {
                    user-select: text;
                    min-width: 32px;
                    max-width: calc(100% - 38px);
                    box-shadow: 0 1px 0 0 rgba(0,0,0,0.18);
                    position: relative;
                    display: block;
                    padding: 12px;
                    border-radius: 8px;
                    background: #fff;
                    margin-bottom: 4px;
                    flex-flow: row nowrap;
                    font-size: 1.4rem;
                    font-weight: 400;
                    &.me {
                        background-color: #e5efff;
                        box-shadow: 0 1px 0 0 #c8deff;
                    }
                }
            }
        }
    }

    /* chat-tools */
    .chat-tools {

    }

    /* chat-input */
    .chat-input {
        background: #fff;
        flex: none;
        position: relative;
        height: 60px;
        overflow: hidden;
        &__content {
            border-top: 1px solid #e1e4ea;
            background-color: #fff;
            height: 100%;
            width: 100%;
            &__input {
                width: 100%;
                height: 100%;
            }
            #chatInputv2 {
                display: flex;
                flex-flow: row nowrap;
            }
        }
        &-container {
            width: 100%;
            display: flex;
            border-top: 1px solid #ececec;
        }
        &-mainContent {
            flex: 0 0 90%;
            max-width: 90%;
        }
        &-control {
            user-select: text;
            text-shadow: 0 0 0 rgba(0,0,0,0.5);
            box-sizing: border-box;
            min-height: 16px;
            max-height: 182px;
            justify-content: center;
            flex-direction: column;
            line-height: normal;
            font-weight: 400;
            font-size: 15px;
            letter-spacing: normal;
            padding: 12px 10px 18px 16px;
            overflow: auto;
            flex: 1 1 auto;
            position: relative;
            word-break: break-all;
            word-break: break-word;
            word-wrap: break-word;
            outline: none;
            border: none;
            width: 100%;
            height: 100%;
        }

        &-btns {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            .input-btn {
                align-self: flex-end;
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .send-btn-chatbar {
                margin-bottom: 15px;
                width: 45px;
                padding: 0;
                text-transform: uppercase;
                height: 40px;
                min-width: 40px;
                font-weight: 600;
                font-size: 15px;
                letter-spacing: normal;
                line-height: 38px;
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
                flex-shrink: inherit;
            }
            .imgHolder {
                width: 24px;
                height: 24px;
                font-size: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0;
            }
            .emoji-outer {
                display: inline-block;
                overflow: hidden;
                letter-spacing: 50px;
                color: transparent;
                text-shadow: none;
            }
        }
    }
`;

export default StyledChatView;