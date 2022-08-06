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

    }
`;

export default StyledChatView;