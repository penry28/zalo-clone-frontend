import styled from 'styled-components';

const StyledLayout = styled.div`
    & {
        padding-top: 0;
        margin-top: 0;
        height: 100%;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-flow: row nowrap;
    }
`;

export default StyledLayout;
