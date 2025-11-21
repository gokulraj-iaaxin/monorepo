const call = (message?: string): string => {
    const msg = message || "Core Package";
    console.log(msg);
    return msg;
};

export default call;


