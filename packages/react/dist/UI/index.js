import React from "react";
import call from "@monorepo/core";
const handleClick = (event) => {
    event?.preventDefault();
    alert(call("World"));
};
export function MyButton() {
    return React.createElement("button", { type: "button", onClick: handleClick, style: { padding: "10px 20px", fontSize: 16 } }, "Click Me");
}
//# sourceMappingURL=index.js.map