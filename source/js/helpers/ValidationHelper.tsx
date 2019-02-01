export const validatePno = (pno: string) => {
    const pnoRegex = /^[0-9]{12}$/;
    return pnoRegex.test(pno);
};
