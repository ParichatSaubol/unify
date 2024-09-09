import {
    GetContentAuthorQuery,
    GetContentAuthorQueryVariables,
  } from '../modules';
  
import { gql, useLazyQuery } from '@apollo/client';
const GET_CONTENT_AUTHOR = gql`
query GetContentAuthor($page: Int, $perPage: Int) {
    getContentAuthor(page: $page, perPage: $perPage) {
      content_author {
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
      current_page
      has_next_page
      per_page
      total_count
    }
  }
`;

const useLazyGetContentAuthor = () =>
  useLazyQuery<GetContentAuthorQuery, GetContentAuthorQueryVariables>(
    GET_CONTENT_AUTHOR,
  );

export { useLazyGetContentAuthor };