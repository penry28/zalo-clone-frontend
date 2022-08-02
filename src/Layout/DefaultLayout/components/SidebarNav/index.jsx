import { ContactSearch, ConversationListId, MainTab, MsgFiltersBar } from "./components";
import { StyledSidebarNav } from "./styled";

function SidebarNav() {
    return (
        <StyledSidebarNav className="sidebar-nav">
            <MainTab />
            <div className="menu-tab">
                <ContactSearch />
                <div className="menu-control-group">
                    <MsgFiltersBar />
                    <ConversationListId />
                </div>
            </div>
        </StyledSidebarNav>
    );
}

export default SidebarNav;
