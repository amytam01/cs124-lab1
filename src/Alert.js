import "./Alert.css";

function Alert(props) {
    return (
        <div className={"backdrop"} onClick={(e) => props.onClose("")}>
            <div className="modal">
                {props.children}
                <div className="alert-buttons">
                    <button className={"alert-button alert-cancel"} type={"button"}
                            onClick={(e) => props.onClose("")}>
                        Cancel
                    </button>
                    <button className={"alert-button alert-ok"} type={"button"}
                            onClick={(e) => {
                                props.onClose("");
                                props.onOK(props.taskToDelete, false);
                            }}>
                        OK
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Alert;