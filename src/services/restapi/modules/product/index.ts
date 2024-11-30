import httpClient, { httpClientWithoutApi } from '../../httpClient';

export const getProductCategory = async () => {
  try {
    const response = await httpClient.get('/appcall/get_product_category');

    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};

export const getProductList = async (
  pageNumber: number,
  pageSize = 8,
  cate?: string,
) => {
  try {
    const params = {
      pageNumber,
      pageSize,
      cate,
    };

    const response = await httpClientWithoutApi.get('/products_list', {
      params,
    });

    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || 'Failed to get product list',
    );
  }
};
