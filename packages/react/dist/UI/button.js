import React from "react";
import call from "core";
const handleClick = (event) => {
    event?.preventDefault();
    alert(call("World"));
    call("Clicked!");
};
export function MyButton() {
    return React.createElement("button", { type: "button", onClick: handleClick, style: { padding: "10px 20px", fontSize: 16 } }, "Click Me");
}
//# sourceMappingURL=button.js.map