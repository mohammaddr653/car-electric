const StickyAside = (props) => {

    return (
        <aside className={props.showinmobile?"d-block side-container p-0":"d-none d-lg-block side-container p-0"}>
            <div className="aside-wrapper rounded overflow-hidden">
                {/* هیچ عنصری مارجین نباید داشته باشد */}
                {props.children}
            </div>
        </aside>
);
}
 
export default StickyAside;