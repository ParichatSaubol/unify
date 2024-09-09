import { gql, useLazyQuery } from '@apollo/client';
import {
    GetSolutionListQuery,
    GetSolutionListQueryVariables,
  } from '../modules';

const GET_SOLUTIONS_LIST = gql`
query GetSolutionList($orderBy: String, $orderDir: String, $page: Int, $perPage: Int) {
    getSolutionList(orderBy: $orderBy, orderDir: $orderDir, page: $page, perPage: $perPage) {
      current_page
      has_next_page
      per_page
      solution {
        solution_area
        solution_area_list
        solution_c_solution_id
        solution_category {
          c_solution_create
          c_solution_create_by
          c_solution_icon
          c_solution_icon_path
          c_solution_id
          c_solution_name_en
          c_solution_name_th
          c_solution_status
          c_solution_update
          c_solution_update_by
        }
        solution_category_sub {
          c_solution_icon_path
          c_solution_status
          scs_c_solution_id
          scs_create_by
          scs_create_date
          scs_id
          scs_name_en
          scs_name_th
          scs_picture_path
          scs_status
          scs_update_by
          scs_update_date
        }
        solution_code
        solution_cover_path
        solution_create
        solution_create_by
        solution_cs_solution_id
        solution_details
        solution_id
        solution_img_path
        solution_install_by
        solution_more
        solution_name
        solution_number
        solution_rating
        solution_service_count
        solution_status
        solution_type
        solution_update
        solution_update_by
      }
      total_count
    }
  }
`;


const useLazyGetSolutionListQuery = () =>
useLazyQuery<GetSolutionListQuery, GetSolutionListQueryVariables>(
    GET_SOLUTIONS_LIST,
);

export { useLazyGetSolutionListQuery };







