import { gql, useLazyQuery } from '@apollo/client';
import {
  GetBrandRecommendQuery,
  GetBrandRecommendQueryVariables,
} from '../modules';

const GET_BRAND = gql`
  query GetBrandRecommend($page: Int, $perPage: Int) {
    getBrandRecommend(page: $page, perPage: $perPage) {
      __typename
      brandRecommend {
        brand {
          brand_banner
          brand_banner_path
          brand_create
          brand_discount_date
          brand_discount_general
          brand_discount_important
          brand_discount_vip
          brand_id
          brand_logo
          brand_logo_path
          brand_name_en
          brand_name_th
          brand_status
          brand_update
        }
        brm_brand_id
        brm_id
        brm_sort
        brm_update
        brm_update_by
      }
      current_page
      has_next_page
      per_page
      total_count
    }
  }
`;



const useLazyGetBrandRecommend = () =>
  useLazyQuery<GetBrandRecommendQuery, GetBrandRecommendQueryVariables>(
    GET_BRAND,
  );

export { useLazyGetBrandRecommend };
