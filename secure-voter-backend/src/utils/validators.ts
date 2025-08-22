export const validateAadhaar = (aadhaar: string): boolean => {
    const aadhaarRegex = /^\d{4}\s\d{4}\s\d{4}$/;
    return aadhaarRegex.test(aadhaar);
};

export const validateVoterID = (voterID: string): boolean => {
    const voterIDRegex = /^[A-Z]{3}\d{7}$/;
    return voterIDRegex.test(voterID);
};

export const validateUserData = (data: { aadhaar: string; voterID: string }): boolean => {
    return validateAadhaar(data.aadhaar) && validateVoterID(data.voterID);
};