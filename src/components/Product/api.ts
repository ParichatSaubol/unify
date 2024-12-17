// api.js (or api.ts for TypeScript)
import config from '@/utils/config';
import {
  useLazyGetProducts,
  useLazyGetProductById,

} from '@/services/gql/modules/product';

export const queryProducts = async (page : number, perPage : number) => {
    try {
      const [getProducts, { loading, error, data }] = useLazyGetProducts();
  
      // Perform the query
      await getProducts({variables: { page : page, perPage :perPage }});
      console.log(data)
  
      // Handle the response
      if (data?.getProducts?.products) {
        const arrayProducts = data.getProducts.products.map((item) => ({
          id: item.pd_id?.toString() || '',
        }));
        return arrayProducts;
      } else if (loading) {
        console.log('Products are loading...');
      } else if (error) {
        console.log('An error occurred:', error);
      }
  
      return [];
    } catch (error) {
      console.error('Error in queryProducts:', error);
      throw error;
    }
  };




// export const queryProductById = async id => {
//   try {
//     const { loading, error, data } = await useLazyGetProductById({
//       variables: { getProductByIdId: id },
//     });

//     return data;
//   } catch (error) {
//     console.error('Error in queryProductById:', error);
//     console.log(id);
//     throw error;
//   }
// };

// export const querySolution = async (page, perPage) => {
//   try {
//     const { loading, error, data } = await useLazyGetSolutionListQuery({
//       variables: { page, perPage },
//     });

//     if (data?.getSolutionList?.solution) {
//       const arraySolutions = data.getSolutionList.solution.map(item => ({
//         image: item?.solution_img_path
//           ? { uri: config.baseURL + item?.solution_img_path }
//           : undefined,
//         id: item.solution_id?.toString() || '',
//         brand: '',
//         title: item?.solution_name,
//         description: item?.solution_details,
//       }));
//       return arraySolutions;
//     } else if (loading) {
//       console.log('SOLUTION are loading...');
//     } else if (error) {
//       console.log('An error occurred:', error);
//     }

//     return [];
//   } catch (error) {
//     console.error('Error in querySolution:', error);
//     throw error;
//   }
// };
