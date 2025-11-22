const call = (message?: string): string => {
    const pac = "Core Package";
    const msg = message || pac;
    console.log(msg+pac);
    return `${msg} ${pac}`;
};

export default call;

export { call };
