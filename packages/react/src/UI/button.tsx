import React, { type MouseEvent, type ReactElement } from "react";
import { call } from "core";

const handleClick = (event?: MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    alert(call("World"));
    call("Clicked!");
};

export function MyButton(): ReactElement {
    return React.createElement(
        "button",
        { type: "button", onClick: handleClick, style: { padding: "10px 20px", fontSize: 16 } },
        "Click Me"
    );
}
