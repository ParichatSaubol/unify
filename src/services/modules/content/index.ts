import { GetContentCardQuery, GetContentCardQueryVariables } from '../modules';

import { gql, useLazyQuery } from '@apollo/client';
const GET_CONTENT_CARD = gql`
  query GetContentCard($page: Int, $perPage: Int) {
    getContentCard(page: $page, perPage: $perPage) {
      content {
        technical_author {
          author_create_by
          author_create_date
          author_id
          author_img_path
          author_name
          author_status
          author_type
          author_update_by
          author_update_date
        }
        technical_author_id
        technical_create_by
        technical_create_date
        technical_id
        technical_img_path
        technical_name
        technical_status
        technical_update_by
        technical_update_date
        technical_view
      }
      current_page
      has_next_page
      per_page
      total_count
    }
  }
`;

const useLazyGetContentCard = () =>
  useLazyQuery<GetContentCardQuery, GetContentCardQueryVariables>(
    GET_CONTENT_CARD,
  );

export { useLazyGetContentCard };
