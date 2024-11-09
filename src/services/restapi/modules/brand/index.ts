import httpClient from '../../httpClient';

export const getProductByBrand = async (brandID: number, brandList: number) => {
  try {
    const response = await httpClient.post('/getProductByBrand', {
      brandID,
      brandList,
    });

    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || 'Failed to get product by brand',
    );
  }
};

export const getBrandRecommend = async () => {
  try {
    const response = await httpClient.get('/appcall/getBrandRecommen');

    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || 'Failed to get brand recommend',
    );
  }
};
