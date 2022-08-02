function MsgFiltersBar() {
    return (
        <div className="msg-filters-bar">
            <div className="filters-menu">
                <div className="menu__item">
                    <div data-translate-inner="STR_ALL">Tất cả</div>
                </div>
                <div className="menu__item">
                    <div data-translate-inner="STR_UNREAD_LABEL">Chưa đọc</div>
                </div>
            </div>
        </div>
    );
}

export default MsgFiltersBar;
