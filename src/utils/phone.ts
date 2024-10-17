const transformPhoneNumber = (phoneNumber: string) => {
  // Extract the country code and the last two digits
  const countryCode = phoneNumber.slice(0, 2); // '66'
  const lastTwoDigits = phoneNumber.slice(-2); // Last two digits

  // Generate the transformed phone number
  const transformedNumber = `++${countryCode}*****${lastTwoDigits}`;

  return transformedNumber;
};

export default transformPhoneNumber;
