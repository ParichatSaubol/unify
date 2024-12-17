import { gql, useLazyQuery } from '@apollo/client';
import {
  GetPopularProductsQueryVariables,
  GetPopularProductsQuery,
  GetProductCategoryQueryVariables,
  GetProductCategoryQuery,
  GetProductByIdQuery,
  GetProductByIdQueryVariables,
} from '../modules';

const GET_PRODUCT_BY_ID = gql`
query GetProductById($getProductByIdId: String!) {
  getProductById(id: $getProductByIdId) {
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
    pd_brand
    pd_cadFile
    pd_catalog_file
    pd_cate_l1
    pd_cateL1_object {
      prod_brand_id
      prod_create
      prod_icon
      prod_icon_path
      prod_id
      prod_image
      prod_image_path
      prod_name_en
      prod_name_th
      prod_status
      prod_update
    }
    pd_cate_l2
    pd_cateL2_object {
      prod_name_th
      prods_create
      prods_id
      prods_img
      prods_name_en
      prods_prod_id
      prods_status
      prods_update
    }
    pd_cate_l3
    pd_cateL3_object {
      prodslv3_create
      prodslv3_id
      prodslv3_name_en
      prodslv3_name_th
      prodslv3_prods_id
      prodslv3_status
      prodslv3_update
    }
    pd_create
    pd_create_by
    pd_delivery_same_day
    pd_description_en
    pd_description_th
    pd_dimension
    pd_discount
    pd_id
    pd_lead_time
    pd_model
    pd_model_object {
      model_aup_day
      model_create
      model_default
      model_discount_Important_customers
      model_discount_Important_vip
      model_id
      model_mark_up1
      model_mark_up2
      model_moq
      model_name
      model_number
      model_package_dimension
      model_pd_id
      model_price
      model_price_Important
      model_price_discount
      model_price_general
      model_price_stand
      model_price_sub
      model_price_tkk
      model_price_vip
      model_product_dimension
      model_status
      model_update
      model_waranty
      model_weight
    }
    pd_moq
    pd_name_en
    pd_name_th
    pd_package_dimension
    pd_photo_file
    pd_qty_per_pcs
    pd_sales
    pd_sell_price
    pd_sku
    pd_standard_price
    pd_star
    pd_status
    pd_stock
    pd_supplier_id
    pd_type
    pd_update
    pd_update_by
    pd_visit
    pd_weight
    supplier_create
  }
}
`;


const GET_PRODUCT = gql`query GetProducts($page: Int, $perPage: Int) {
  getProducts(page: $page, perPage: $perPage) {
    current_page
    has_next_page
    per_page
    products {
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
      pd_brand
      pd_cadFile
      pd_catalog_file
      pd_cateL1_object {
        prod_brand_id
        prod_create
        prod_icon
        prod_icon_path
        prod_id
        prod_image
        prod_image_path
        prod_name_en
        prod_name_th
        prod_status
        prod_update
      }
      pd_cateL2_object {
        prod_name_th
        prods_create
        prods_id
        prods_img
        prods_name_en
        prods_prod_id
        prods_status
        prods_update
      }
      pd_cateL3_object {
        prodslv3_create
        prodslv3_id
        prodslv3_name_en
        prodslv3_name_th
        prodslv3_prods_id
        prodslv3_status
        prodslv3_update
      }
      pd_cate_l1
      pd_cate_l2
      pd_cate_l3
      pd_create
      pd_create_by
      pd_delivery_same_day
      pd_description_en
      pd_description_th
      pd_dimension
      pd_discount
      pd_id
      pd_lead_time
      pd_model
      pd_model_object {
        model_aup_day
        model_create
        model_default
        model_discount_Important_customers
        model_discount_Important_vip
        model_id
        model_mark_up1
        model_mark_up2
        model_moq
        model_name
        model_number
        model_package_dimension
        model_pd_id
        model_price
        model_price_Important
        model_price_discount
        model_price_general
        model_price_stand
        model_price_sub
        model_price_tkk
        model_price_vip
        model_product_dimension
        model_status
        model_update
        model_waranty
        model_weight
      }
      pd_moq
      pd_name_en
      pd_name_th
      pd_package_dimension
      pd_photo_file
      pd_qty_per_pcs
      pd_sales
      pd_sell_price
      pd_sku
      pd_standard_price
      pd_star
      pd_status
      pd_stock
      pd_supplier_id
      pd_type
      pd_update
      pd_update_by
      pd_visit
      pd_weight
      supplier_create
    }
    total_count
  }
}
`;

const GET_POPULAR_PRODUCTS = gql`
query GetPopularProducts($page: Int, $perPage: Int) {
  getPopularProducts(page: $page, perPage: $perPage) {
    current_page
    has_next_page
    per_page
    popular_products {
      pplp_create_by
      pplp_create_date
      pplp_id
      pplp_pd_id
      pplp_status
      pplp_update_by
      pplp_update_date
      product {
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
        pd_brand
        pd_cadFile
        pd_catalog_file
        pd_cateL1_object {
          prod_brand_id
          prod_create
          prod_icon
          prod_icon_path
          prod_id
          prod_image
          prod_image_path
          prod_name_en
          prod_name_th
          prod_status
          prod_update
        }
        pd_cateL2_object {
          prod_name_th
          prods_create
          prods_id
          prods_img
          prods_name_en
          prods_prod_id
          prods_status
          prods_update
        }
        pd_cateL3_object {
          prodslv3_create
          prodslv3_id
          prodslv3_name_en
          prodslv3_name_th
          prodslv3_prods_id
          prodslv3_status
          prodslv3_update
        }
        pd_cate_l1
        pd_cate_l2
        pd_cate_l3
        pd_create
        pd_create_by
        pd_delivery_same_day
        pd_description_en
        pd_description_th
        pd_dimension
        pd_discount
        pd_id
        pd_lead_time
        pd_model
        pd_model_object {
          model_aup_day
          model_create
          model_default
          model_discount_Important_customers
          model_discount_Important_vip
          model_id
          model_mark_up1
          model_mark_up2
          model_moq
          model_name
          model_number
          model_package_dimension
          model_pd_id
          model_price
          model_price_Important
          model_price_discount
          model_price_general
          model_price_stand
          model_price_sub
          model_price_tkk
          model_price_vip
          model_product_dimension
          model_status
          model_update
          model_waranty
          model_weight
        }
        pd_moq
        pd_name_en
        pd_name_th
        pd_package_dimension
        pd_photo_file
        pd_qty_per_pcs
        pd_sales
        pd_sell_price
        pd_sku
        pd_standard_price
        pd_star
        pd_status
        pd_stock
        pd_supplier_id
        pd_type
        pd_update
        pd_update_by
        pd_visit
        pd_weight
        supplier_create
      }
    }
    total_count
  }
}`

const GET_PRODUCT_CATEGORY = gql`
query GetProductCategory($page: Int, $perPage: Int) {
  getProductCategory(page: $page, perPage: $perPage) {
    current_page
    has_next_page
    per_page
    product_category {
      prod_brand_id
      prod_create
      prod_icon
      prod_icon_path
      prod_id
      prod_image
      prod_image_path
      prod_name_en
      prod_name_th
      prod_status
      prod_update
    }
    total_count
  }
}
`;



const useLazyGetProductById = () =>
  useLazyQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(
    GET_PRODUCT_BY_ID,
    );

const useLazyGetPopularProducts = () =>
  useLazyQuery<GetPopularProductsQuery, GetPopularProductsQueryVariables>(
    GET_POPULAR_PRODUCTS,
  );

const useLazyGetProductCategory = () =>
  useLazyQuery<GetProductCategoryQuery, GetProductCategoryQueryVariables>(
    GET_PRODUCT_CATEGORY,
  );

  const useLazyGetProducts = () =>
  useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(
    GET_PRODUCT,
   
  );

export { useLazyGetProductById, useLazyGetPopularProducts, useLazyGetProductCategory , useLazyGetProducts };
