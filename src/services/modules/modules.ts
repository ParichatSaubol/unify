import * as Types from '@/services/types';

export type GetContentAuthorQueryVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  perPage?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type GetContentAuthorQuery = {
  __typename?: 'Query';
  getContentAuthor?: {
    __typename?: 'ResponseContentAuthor';
    current_page: number;
    has_next_page: boolean;
    per_page: number;
    total_count: number;
    content_author: Array<{
      __typename?: 'ContentAuthorDto';
      author_create_by?: number | null;
      author_create_date?: any | null;
      author_id?: number | null;
      author_img_path?: string | null;
      author_name?: string | null;
      author_status?: number | null;
      author_type?: number | null;
      author_update_by?: string | null;
      author_update_date?: any | null;
    }>;
  } | null;
};

export type GetBrandRecommendQueryVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  perPage?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type GetBrandRecommendQuery = {
  __typename?: 'Query';
  getBrandRecommend?: {
    __typename: 'ResponseBrandRecommendModel';
    current_page: number;
    has_next_page: boolean;
    per_page: number;
    total_count: number;
    brandRecommend: Array<{
      __typename?: 'BrandRecommendDto';
      brm_brand_id?: number | null;
      brm_id?: number | null;
      brm_sort?: number | null;
      brm_update?: any | null;
      brm_update_by?: number | null;
      brand?: {
        __typename?: 'BrandDto';
        brand_banner?: string | null;
        brand_banner_path?: string | null;
        brand_create?: any | null;
        brand_discount_date?: any | null;
        brand_discount_general?: string | null;
        brand_discount_important?: string | null;
        brand_discount_vip?: string | null;
        brand_id?: number | null;
        brand_logo?: string | null;
        brand_logo_path?: string | null;
        brand_name_en?: string | null;
        brand_name_th?: string | null;
        brand_status?: number | null;
        brand_update?: any | null;
      } | null;
    }>;
  } | null;
};

export type GetContentCardQueryVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  perPage?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type GetContentCardQuery = {
  __typename?: 'Query';
  getContentCard?: {
    __typename?: 'ResponseContentCard';
    current_page: number;
    has_next_page: boolean;
    per_page: number;
    total_count: number;
    content: Array<{
      __typename?: 'ContentCardDto';
      technical_author_id?: number | null;
      technical_create_by?: number | null;
      technical_create_date?: any | null;
      technical_id?: number | null;
      technical_img_path?: string | null;
      technical_name?: string | null;
      technical_status?: number | null;
      technical_update_by?: number | null;
      technical_update_date?: any | null;
      technical_view?: number | null;
      technical_author?: {
        __typename?: 'ContentAuthorDto';
        author_create_by?: number | null;
        author_create_date?: any | null;
        author_id?: number | null;
        author_img_path?: string | null;
        author_name?: string | null;
        author_status?: number | null;
        author_type?: number | null;
        author_update_by?: string | null;
        author_update_date?: any | null;
      } | null;
    }>;
  } | null;
};

export type GetFlashSaleListQueryVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  perPage?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type GetFlashSaleListQuery = {
  __typename?: 'Query';
  getFlashSaleList?: {
    __typename?: 'ResponseFlashSaleModel';
    current_page: number;
    has_next_page: boolean;
    per_page: number;
    total_count: number;
    flashsale: Array<{
      __typename?: 'FlashSaleDto';
      flash_create?: any | null;
      flash_create_by?: number | null;
      flash_end?: any | null;
      flash_frame_template_path?: string | null;
      flash_id?: number | null;
      flash_start?: any | null;
      flash_status?: number | null;
      flash_update?: any | null;
      flash_update_by?: number | null;
      item?: Array<{
        __typename?: 'FlashSaleItemDto';
        flt_amount?: number | null;
        flt_amount_sale?: number | null;
        flt_create?: any | null;
        flt_create_by?: number | null;
        flt_discount_price?: number | null;
        flt_flash_id?: number | null;
        flt_id?: number | null;
        flt_product_id?: number | null;
        flt_status?: number | null;
        flt_type_by?: number | null;
        flt_type_discount?: number | null;
        flt_update?: any | null;
        flt_update_by?: number | null;
        product?: Array<{
          __typename?: 'ProductDto';
          pd_brand?: number | null;
          pd_cadFile?: string | null;
          pd_catalog_file?: string | null;
          pd_cate_l1?: number | null;
          pd_cate_l2?: number | null;
          pd_cate_l3?: number | null;
          pd_create?: any | null;
          pd_create_by?: number | null;
          pd_delivery_same_day?: string | null;
          pd_description_en?: string | null;
          pd_description_th?: string | null;
          pd_dimension?: string | null;
          pd_discount?: number | null;
          pd_id?: number | null;
          pd_lead_time?: string | null;
          pd_model?: string | null;
          pd_moq?: string | null;
          pd_name_en?: string | null;
          pd_name_th?: string | null;
          pd_package_dimension?: string | null;
          pd_photo_file?: string | null;
          pd_qty_per_pcs?: string | null;
          pd_sales?: number | null;
          pd_sell_price?: number | null;
          pd_sku?: string | null;
          pd_standard_price?: number | null;
          pd_star?: number | null;
          pd_status?: number | null;
          pd_stock?: number | null;
          pd_supplier_id?: string | null;
          pd_type?: number | null;
          pd_update?: any | null;
          pd_update_by?: number | null;
          pd_visit?: number | null;
          pd_weight?: string | null;
          supplier_create?: string | null;
          brand?: {
            __typename?: 'BrandDto';
            brand_banner?: string | null;
            brand_banner_path?: string | null;
            brand_create?: any | null;
            brand_discount_date?: any | null;
            brand_discount_general?: string | null;
            brand_discount_important?: string | null;
            brand_discount_vip?: string | null;
            brand_id?: number | null;
            brand_logo?: string | null;
            brand_logo_path?: string | null;
            brand_name_en?: string | null;
            brand_name_th?: string | null;
            brand_status?: number | null;
            brand_update?: any | null;
          } | null;
          pd_cateL1_object?: {
            __typename?: 'ProductCategoryDto';
            prod_brand_id?: string | null;
            prod_create?: any | null;
            prod_icon?: string | null;
            prod_icon_path?: string | null;
            prod_id?: number | null;
            prod_image?: string | null;
            prod_image_path?: string | null;
            prod_name_en?: string | null;
            prod_name_th?: string | null;
            prod_status?: number | null;
            prod_update?: any | null;
          } | null;
          pd_cateL2_object?: {
            __typename?: 'ProductSubCategoryDto';
            prod_name_th?: string | null;
            prods_create?: any | null;
            prods_id?: number | null;
            prods_img?: string | null;
            prods_name_en?: string | null;
            prods_prod_id?: number | null;
            prods_status?: number | null;
            prods_update?: any | null;
          } | null;
          pd_cateL3_object?: {
            __typename?: 'ProductSubCategoryLv3Dto';
            prodslv3_create?: any | null;
            prodslv3_id?: number | null;
            prodslv3_name_en?: string | null;
            prodslv3_name_th?: string | null;
            prodslv3_prods_id?: number | null;
            prodslv3_status?: number | null;
            prodslv3_update?: any | null;
          } | null;
          pd_model_object?: {
            __typename?: 'ProductModelDto';
            model_aup_day?: string | null;
            model_create?: any | null;
            model_default?: number | null;
            model_discount_Important_customers?: number | null;
            model_discount_Important_vip?: number | null;
            model_id?: number | null;
            model_mark_up1?: number | null;
            model_mark_up2?: number | null;
            model_moq?: number | null;
            model_name?: string | null;
            model_number?: number | null;
            model_package_dimension?: string | null;
            model_pd_id?: number | null;
            model_price?: number | null;
            model_price_Important?: string | null;
            model_price_discount?: number | null;
            model_price_general?: number | null;
            model_price_stand?: string | null;
            model_price_sub?: any | null;
            model_price_tkk?: number | null;
            model_price_vip?: string | null;
            model_product_dimension?: string | null;
            model_status?: number | null;
            model_update?: any | null;
            model_waranty?: string | null;
            model_weight?: string | null;
          } | null;
        }> | null;
      }> | null;
    }>;
  } | null;
};

export type GetProductByIdQueryVariables = Types.Exact<{
  getProductByIdId: Types.Scalars['String']['input'];
}>;

export type GetProductByIdQuery = {
  __typename?: 'Query';
  getProductById?: {
    __typename?: 'ProductDto';
    pd_brand?: number | null;
    pd_cadFile?: string | null;
    pd_catalog_file?: string | null;
    pd_cate_l1?: number | null;
    pd_cate_l2?: number | null;
    pd_cate_l3?: number | null;
    pd_create?: any | null;
    pd_create_by?: number | null;
    pd_delivery_same_day?: string | null;
    pd_description_en?: string | null;
    pd_description_th?: string | null;
    pd_dimension?: string | null;
    pd_discount?: number | null;
    pd_id?: number | null;
    pd_lead_time?: string | null;
    pd_model?: string | null;
    pd_moq?: string | null;
    pd_name_en?: string | null;
    pd_name_th?: string | null;
    pd_package_dimension?: string | null;
    pd_photo_file?: string | null;
    pd_qty_per_pcs?: string | null;
    pd_sales?: number | null;
    pd_sell_price?: number | null;
    pd_sku?: string | null;
    pd_standard_price?: number | null;
    pd_star?: number | null;
    pd_status?: number | null;
    pd_stock?: number | null;
    pd_supplier_id?: string | null;
    pd_type?: number | null;
    pd_update?: any | null;
    pd_update_by?: number | null;
    pd_visit?: number | null;
    pd_weight?: string | null;
    supplier_create?: string | null;
    brand?: {
      __typename?: 'BrandDto';
      brand_banner?: string | null;
      brand_banner_path?: string | null;
      brand_create?: any | null;
      brand_discount_date?: any | null;
      brand_discount_general?: string | null;
      brand_discount_important?: string | null;
      brand_discount_vip?: string | null;
      brand_id?: number | null;
      brand_logo?: string | null;
      brand_logo_path?: string | null;
      brand_name_en?: string | null;
      brand_name_th?: string | null;
      brand_status?: number | null;
      brand_update?: any | null;
    } | null;
    pd_cateL1_object?: {
      __typename?: 'ProductCategoryDto';
      prod_brand_id?: string | null;
      prod_create?: any | null;
      prod_icon?: string | null;
      prod_icon_path?: string | null;
      prod_id?: number | null;
      prod_image?: string | null;
      prod_image_path?: string | null;
      prod_name_en?: string | null;
      prod_name_th?: string | null;
      prod_status?: number | null;
      prod_update?: any | null;
    } | null;
    pd_cateL2_object?: {
      __typename?: 'ProductSubCategoryDto';
      prod_name_th?: string | null;
      prods_create?: any | null;
      prods_id?: number | null;
      prods_img?: string | null;
      prods_name_en?: string | null;
      prods_prod_id?: number | null;
      prods_status?: number | null;
      prods_update?: any | null;
    } | null;
    pd_cateL3_object?: {
      __typename?: 'ProductSubCategoryLv3Dto';
      prodslv3_create?: any | null;
      prodslv3_id?: number | null;
      prodslv3_name_en?: string | null;
      prodslv3_name_th?: string | null;
      prodslv3_prods_id?: number | null;
      prodslv3_status?: number | null;
      prodslv3_update?: any | null;
    } | null;
    pd_model_object?: {
      __typename?: 'ProductModelDto';
      model_aup_day?: string | null;
      model_create?: any | null;
      model_default?: number | null;
      model_discount_Important_customers?: number | null;
      model_discount_Important_vip?: number | null;
      model_id?: number | null;
      model_mark_up1?: number | null;
      model_mark_up2?: number | null;
      model_moq?: number | null;
      model_name?: string | null;
      model_number?: number | null;
      model_package_dimension?: string | null;
      model_pd_id?: number | null;
      model_price?: number | null;
      model_price_Important?: string | null;
      model_price_discount?: number | null;
      model_price_general?: number | null;
      model_price_stand?: string | null;
      model_price_sub?: any | null;
      model_price_tkk?: number | null;
      model_price_vip?: string | null;
      model_product_dimension?: string | null;
      model_status?: number | null;
      model_update?: any | null;
      model_waranty?: string | null;
      model_weight?: string | null;
    } | null;
  } | null;
};

export type GetProductsQueryVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  perPage?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type GetProductsQuery = {
  __typename?: 'Query';
  getProducts?: {
    __typename?: 'ResponseProductsModel';
    current_page: number;
    has_next_page: boolean;
    per_page: number;
    total_count: number;
    products: Array<{
      __typename?: 'ProductDto';
      pd_brand?: number | null;
      pd_cadFile?: string | null;
      pd_catalog_file?: string | null;
      pd_cate_l1?: number | null;
      pd_cate_l2?: number | null;
      pd_cate_l3?: number | null;
      pd_create?: any | null;
      pd_create_by?: number | null;
      pd_delivery_same_day?: string | null;
      pd_description_en?: string | null;
      pd_description_th?: string | null;
      pd_dimension?: string | null;
      pd_discount?: number | null;
      pd_id?: number | null;
      pd_lead_time?: string | null;
      pd_model?: string | null;
      pd_moq?: string | null;
      pd_name_en?: string | null;
      pd_name_th?: string | null;
      pd_package_dimension?: string | null;
      pd_photo_file?: string | null;
      pd_qty_per_pcs?: string | null;
      pd_sales?: number | null;
      pd_sell_price?: number | null;
      pd_sku?: string | null;
      pd_standard_price?: number | null;
      pd_star?: number | null;
      pd_status?: number | null;
      pd_stock?: number | null;
      pd_supplier_id?: string | null;
      pd_type?: number | null;
      pd_update?: any | null;
      pd_update_by?: number | null;
      pd_visit?: number | null;
      pd_weight?: string | null;
      supplier_create?: string | null;
      brand?: {
        __typename?: 'BrandDto';
        brand_banner?: string | null;
        brand_banner_path?: string | null;
        brand_create?: any | null;
        brand_discount_date?: any | null;
        brand_discount_general?: string | null;
        brand_discount_important?: string | null;
        brand_discount_vip?: string | null;
        brand_id?: number | null;
        brand_logo?: string | null;
        brand_logo_path?: string | null;
        brand_name_en?: string | null;
        brand_name_th?: string | null;
        brand_status?: number | null;
        brand_update?: any | null;
      } | null;
      pd_cateL1_object?: {
        __typename?: 'ProductCategoryDto';
        prod_brand_id?: string | null;
        prod_create?: any | null;
        prod_icon?: string | null;
        prod_icon_path?: string | null;
        prod_id?: number | null;
        prod_image?: string | null;
        prod_image_path?: string | null;
        prod_name_en?: string | null;
        prod_name_th?: string | null;
        prod_status?: number | null;
        prod_update?: any | null;
      } | null;
      pd_cateL2_object?: {
        __typename?: 'ProductSubCategoryDto';
        prod_name_th?: string | null;
        prods_create?: any | null;
        prods_id?: number | null;
        prods_img?: string | null;
        prods_name_en?: string | null;
        prods_prod_id?: number | null;
        prods_status?: number | null;
        prods_update?: any | null;
      } | null;
      pd_cateL3_object?: {
        __typename?: 'ProductSubCategoryLv3Dto';
        prodslv3_create?: any | null;
        prodslv3_id?: number | null;
        prodslv3_name_en?: string | null;
        prodslv3_name_th?: string | null;
        prodslv3_prods_id?: number | null;
        prodslv3_status?: number | null;
        prodslv3_update?: any | null;
      } | null;
      pd_model_object?: {
        __typename?: 'ProductModelDto';
        model_aup_day?: string | null;
        model_create?: any | null;
        model_default?: number | null;
        model_discount_Important_customers?: number | null;
        model_discount_Important_vip?: number | null;
        model_id?: number | null;
        model_mark_up1?: number | null;
        model_mark_up2?: number | null;
        model_moq?: number | null;
        model_name?: string | null;
        model_number?: number | null;
        model_package_dimension?: string | null;
        model_pd_id?: number | null;
        model_price?: number | null;
        model_price_Important?: string | null;
        model_price_discount?: number | null;
        model_price_general?: number | null;
        model_price_stand?: string | null;
        model_price_sub?: any | null;
        model_price_tkk?: number | null;
        model_price_vip?: string | null;
        model_product_dimension?: string | null;
        model_status?: number | null;
        model_update?: any | null;
        model_waranty?: string | null;
        model_weight?: string | null;
      } | null;
    }>;
  } | null;
};

export type GetPopularProductsQueryVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  perPage?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type GetPopularProductsQuery = {
  __typename?: 'Query';
  getPopularProducts?: {
    __typename?: 'ResponsePopularProductsModel';
    current_page: number;
    has_next_page: boolean;
    per_page: number;
    total_count: number;
    popular_products: Array<{
      __typename?: 'PopularProductDto';
      pplp_create_by?: number | null;
      pplp_create_date?: any | null;
      pplp_id?: number | null;
      pplp_pd_id?: number | null;
      pplp_status?: number | null;
      pplp_update_by?: number | null;
      pplp_update_date?: any | null;
      product?: {
        __typename?: 'ProductDto';
        pd_brand?: number | null;
        pd_cadFile?: string | null;
        pd_catalog_file?: string | null;
        pd_cate_l1?: number | null;
        pd_cate_l2?: number | null;
        pd_cate_l3?: number | null;
        pd_create?: any | null;
        pd_create_by?: number | null;
        pd_delivery_same_day?: string | null;
        pd_description_en?: string | null;
        pd_description_th?: string | null;
        pd_dimension?: string | null;
        pd_discount?: number | null;
        pd_id?: number | null;
        pd_lead_time?: string | null;
        pd_model?: string | null;
        pd_moq?: string | null;
        pd_name_en?: string | null;
        pd_name_th?: string | null;
        pd_package_dimension?: string | null;
        pd_photo_file?: string | null;
        pd_qty_per_pcs?: string | null;
        pd_sales?: number | null;
        pd_sell_price?: number | null;
        pd_sku?: string | null;
        pd_standard_price?: number | null;
        pd_star?: number | null;
        pd_status?: number | null;
        pd_stock?: number | null;
        pd_supplier_id?: string | null;
        pd_type?: number | null;
        pd_update?: any | null;
        pd_update_by?: number | null;
        pd_visit?: number | null;
        pd_weight?: string | null;
        supplier_create?: string | null;
        brand?: {
          __typename?: 'BrandDto';
          brand_banner?: string | null;
          brand_banner_path?: string | null;
          brand_create?: any | null;
          brand_discount_date?: any | null;
          brand_discount_general?: string | null;
          brand_discount_important?: string | null;
          brand_discount_vip?: string | null;
          brand_id?: number | null;
          brand_logo?: string | null;
          brand_logo_path?: string | null;
          brand_name_en?: string | null;
          brand_name_th?: string | null;
          brand_status?: number | null;
          brand_update?: any | null;
        } | null;
        pd_cateL1_object?: {
          __typename?: 'ProductCategoryDto';
          prod_brand_id?: string | null;
          prod_create?: any | null;
          prod_icon?: string | null;
          prod_icon_path?: string | null;
          prod_id?: number | null;
          prod_image?: string | null;
          prod_image_path?: string | null;
          prod_name_en?: string | null;
          prod_name_th?: string | null;
          prod_status?: number | null;
          prod_update?: any | null;
        } | null;
        pd_cateL2_object?: {
          __typename?: 'ProductSubCategoryDto';
          prod_name_th?: string | null;
          prods_create?: any | null;
          prods_id?: number | null;
          prods_img?: string | null;
          prods_name_en?: string | null;
          prods_prod_id?: number | null;
          prods_status?: number | null;
          prods_update?: any | null;
        } | null;
        pd_cateL3_object?: {
          __typename?: 'ProductSubCategoryLv3Dto';
          prodslv3_create?: any | null;
          prodslv3_id?: number | null;
          prodslv3_name_en?: string | null;
          prodslv3_name_th?: string | null;
          prodslv3_prods_id?: number | null;
          prodslv3_status?: number | null;
          prodslv3_update?: any | null;
        } | null;
        pd_model_object?: {
          __typename?: 'ProductModelDto';
          model_aup_day?: string | null;
          model_create?: any | null;
          model_default?: number | null;
          model_discount_Important_customers?: number | null;
          model_discount_Important_vip?: number | null;
          model_id?: number | null;
          model_mark_up1?: number | null;
          model_mark_up2?: number | null;
          model_moq?: number | null;
          model_name?: string | null;
          model_number?: number | null;
          model_package_dimension?: string | null;
          model_pd_id?: number | null;
          model_price?: number | null;
          model_price_Important?: string | null;
          model_price_discount?: number | null;
          model_price_general?: number | null;
          model_price_stand?: string | null;
          model_price_sub?: any | null;
          model_price_tkk?: number | null;
          model_price_vip?: string | null;
          model_product_dimension?: string | null;
          model_status?: number | null;
          model_update?: any | null;
          model_waranty?: string | null;
          model_weight?: string | null;
        } | null;
      } | null;
    }>;
  } | null;
};

export type GetProductCategoryQueryVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  perPage?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type GetProductCategoryQuery = {
  __typename?: 'Query';
  getProductCategory?: {
    __typename?: 'ResponseProductCategoryModel';
    current_page: number;
    has_next_page: boolean;
    per_page: number;
    total_count: number;
    product_category: Array<{
      __typename?: 'ProductCategoryDto';
      prod_brand_id?: string | null;
      prod_create?: any | null;
      prod_icon?: string | null;
      prod_icon_path?: string | null;
      prod_id?: number | null;
      prod_image?: string | null;
      prod_image_path?: string | null;
      prod_name_en?: string | null;
      prod_name_th?: string | null;
      prod_status?: number | null;
      prod_update?: any | null;
    }>;
  } | null;
};

export type GetSolutionListQueryVariables = Types.Exact<{
  orderBy?: Types.InputMaybe<Types.Scalars['String']['input']>;
  orderDir?: Types.InputMaybe<Types.Scalars['String']['input']>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  perPage?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type GetSolutionListQuery = {
  __typename?: 'Query';
  getSolutionList?: {
    __typename?: 'ResponseSolutionModel';
    current_page: number;
    has_next_page: boolean;
    per_page: number;
    total_count: number;
    solution: Array<{
      __typename?: 'SolutionDto';
      solution_area?: string | null;
      solution_area_list?: Array<string> | null;
      solution_c_solution_id?: number | null;
      solution_code?: string | null;
      solution_cover_path?: string | null;
      solution_create?: any | null;
      solution_create_by?: number | null;
      solution_cs_solution_id?: number | null;
      solution_details?: string | null;
      solution_id?: number | null;
      solution_img_path?: string | null;
      solution_install_by?: string | null;
      solution_more?: string | null;
      solution_name?: string | null;
      solution_number?: number | null;
      solution_rating?: number | null;
      solution_service_count?: number | null;
      solution_status?: number | null;
      solution_type?: number | null;
      solution_update?: any | null;
      solution_update_by?: number | null;
      solution_category?: {
        __typename?: 'SolutionCategoryDto';
        c_solution_create?: any | null;
        c_solution_create_by?: number | null;
        c_solution_icon?: string | null;
        c_solution_icon_path?: string | null;
        c_solution_id?: number | null;
        c_solution_name_en?: string | null;
        c_solution_name_th?: string | null;
        c_solution_status?: number | null;
        c_solution_update?: any | null;
        c_solution_update_by?: number | null;
      } | null;
      solution_category_sub?: {
        __typename?: 'SolutionCategorySubDto';
        c_solution_icon_path?: string | null;
        c_solution_status?: number | null;
        scs_c_solution_id?: number | null;
        scs_create_by?: number | null;
        scs_create_date?: any | null;
        scs_id?: number | null;
        scs_name_en?: string | null;
        scs_name_th?: string | null;
        scs_picture_path?: string | null;
        scs_status?: number | null;
        scs_update_by?: number | null;
        scs_update_date?: any | null;
      } | null;
    }>;
  } | null;
};
