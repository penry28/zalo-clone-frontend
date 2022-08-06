import { StyledLayout } from "./styled";
import { SidebarNav, ResizeHandle } from './components';

function DefaultLayout({ children }) {
    return (
        <StyledLayout className="container">
            <SidebarNav />
            <ResizeHandle />
            {children}
        </StyledLayout>
    );
}

export default DefaultLayout;
