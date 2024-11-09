import httpClient from '../../httpClient';

export const getProvince = async () => {
  try {
    const response = await httpClient.get('/appcall/get_province');

    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Failed to get province');
  }
};

export const getAmphur = async (provinceId: string) => {
  try {
    const response = await httpClient.post('/appcall/get_amphur', {
      province_id: provinceId,
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Failed to get amphur');
  }
};

export const getDistrict = async (amphureId: string) => {
  try {
    const response = await httpClient.post('/appcall/get_district', {
      amphure_id: amphureId,
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Failed to get district');
  }
};

export const getZipCode = async () => {
  try {
    const response = await httpClient.get('/appcall/get_zipcode');

    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Failed to get zip code');
  }
};

export const getAllLocation = async () => {
  try {
    const response = await httpClient.post('/appcall/getAllLocation');

    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || 'Failed to get all location',
    );
  }
};

export const submitChatContact = async () => {
  try {
    const response = await httpClient.post('/appcall/submitChatContact');

    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || 'Failed to submit chat contact',
    );
  }
};
