const call = (message) => {
    const pac = "Core Package";
    const msg = message || pac;
    console.log(msg + pac);
    return `${msg} ${pac}`;
};
export default call;
export { call };
//# sourceMappingURL=index.js.map