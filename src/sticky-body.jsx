const StickyBody = (props) => {

    return (
        <div className="body-container rounded d-flex flex-column gap-3 p-0 ">
            {props.children}
        </div>
    );
}
 
export default StickyBody;