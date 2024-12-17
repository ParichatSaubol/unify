export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};

export type BannersDto = {
  __typename?: 'BannersDto';
  banner_create?: Maybe<Scalars['DateTime']['output']>;
  banner_id?: Maybe<Scalars['Int']['output']>;
  banner_image?: Maybe<Scalars['String']['output']>;
  banner_link?: Maybe<Scalars['String']['output']>;
  banner_path?: Maybe<Scalars['String']['output']>;
  banner_position?: Maybe<Scalars['Int']['output']>;
  banner_status?: Maybe<Scalars['Int']['output']>;
  banner_title?: Maybe<Scalars['String']['output']>;
  banner_type?: Maybe<Scalars['Int']['output']>;
  banner_update?: Maybe<Scalars['DateTime']['output']>;
};

export type BrandDiscountDto = {
  __typename?: 'BrandDiscountDto';
  bnw_brand_id?: Maybe<Scalars['Int']['output']>;
  bnw_coupon?: Maybe<Scalars['String']['output']>;
  bnw_id?: Maybe<Scalars['Int']['output']>;
  bnw_top_discount?: Maybe<Scalars['String']['output']>;
  bnw_update?: Maybe<Scalars['DateTime']['output']>;
  bnw_update_by?: Maybe<Scalars['Int']['output']>;
  brand?: Maybe<BrandDto>;
};

export type BrandDto = {
  __typename?: 'BrandDto';
  brand_banner?: Maybe<Scalars['String']['output']>;
  brand_banner_path?: Maybe<Scalars['String']['output']>;
  brand_create?: Maybe<Scalars['DateTime']['output']>;
  brand_discount_date?: Maybe<Scalars['DateTime']['output']>;
  brand_discount_general?: Maybe<Scalars['String']['output']>;
  brand_discount_important?: Maybe<Scalars['String']['output']>;
  brand_discount_vip?: Maybe<Scalars['String']['output']>;
  brand_id?: Maybe<Scalars['Int']['output']>;
  brand_logo?: Maybe<Scalars['String']['output']>;
  brand_logo_path?: Maybe<Scalars['String']['output']>;
  brand_name_en?: Maybe<Scalars['String']['output']>;
  brand_name_th?: Maybe<Scalars['String']['output']>;
  brand_status?: Maybe<Scalars['Int']['output']>;
  brand_update?: Maybe<Scalars['DateTime']['output']>;
};

export type BrandListDto = {
  __typename?: 'BrandListDto';
  blist_brand?: Maybe<Scalars['String']['output']>;
  blist_brand_id?: Maybe<Scalars['Int']['output']>;
  blist_brand_path?: Maybe<Scalars['String']['output']>;
  blist_create?: Maybe<Scalars['DateTime']['output']>;
  blist_create_by?: Maybe<Scalars['Int']['output']>;
  blist_id?: Maybe<Scalars['Int']['output']>;
  blist_name?: Maybe<Scalars['String']['output']>;
  blist_name_path?: Maybe<Scalars['String']['output']>;
  blist_pd_id?: Maybe<Scalars['String']['output']>;
  blist_sort?: Maybe<Scalars['Int']['output']>;
  blist_status?: Maybe<Scalars['Int']['output']>;
  blist_update?: Maybe<Scalars['DateTime']['output']>;
  blist_update_by?: Maybe<Scalars['Int']['output']>;
  brand?: Maybe<BrandDto>;
  product?: Maybe<Array<ProductDto>>;
};

export type BrandRecommendDto = {
  __typename?: 'BrandRecommendDto';
  brand?: Maybe<BrandDto>;
  brm_brand_id?: Maybe<Scalars['Int']['output']>;
  brm_id?: Maybe<Scalars['Int']['output']>;
  brm_sort?: Maybe<Scalars['Int']['output']>;
  brm_update?: Maybe<Scalars['DateTime']['output']>;
  brm_update_by?: Maybe<Scalars['Int']['output']>;
};

export type BrandTopDto = {
  __typename?: 'BrandTopDto';
  brand?: Maybe<BrandDto>;
  btop_about?: Maybe<Scalars['String']['output']>;
  btop_brand?: Maybe<Scalars['String']['output']>;
  btop_brand_id?: Maybe<Scalars['Int']['output']>;
  btop_brand_path?: Maybe<Scalars['String']['output']>;
  btop_create?: Maybe<Scalars['DateTime']['output']>;
  btop_create_by?: Maybe<Scalars['Int']['output']>;
  btop_id?: Maybe<Scalars['Int']['output']>;
  btop_name?: Maybe<Scalars['String']['output']>;
  btop_name_path?: Maybe<Scalars['String']['output']>;
  btop_pd_id?: Maybe<Scalars['String']['output']>;
  btop_sort?: Maybe<Scalars['Int']['output']>;
  btop_status?: Maybe<Scalars['Int']['output']>;
  btop_update?: Maybe<Scalars['DateTime']['output']>;
  btop_update_by?: Maybe<Scalars['Int']['output']>;
  images?: Maybe<Array<BrandTopImageDto>>;
  product?: Maybe<Array<ProductDto>>;
};

export type BrandTopImageDto = {
  __typename?: 'BrandTopImageDto';
  bti_btop_id?: Maybe<Scalars['Int']['output']>;
  bti_create_by?: Maybe<Scalars['Int']['output']>;
  bti_create_date?: Maybe<Scalars['DateTime']['output']>;
  bti_id?: Maybe<Scalars['Int']['output']>;
  bti_img_path?: Maybe<Scalars['String']['output']>;
  bti_status?: Maybe<Scalars['Int']['output']>;
  bti_update_by?: Maybe<Scalars['Int']['output']>;
  bti_update_date?: Maybe<Scalars['DateTime']['output']>;
};

export type ContentAuthorDto = {
  __typename?: 'ContentAuthorDto';
  author_create_by?: Maybe<Scalars['Int']['output']>;
  author_create_date?: Maybe<Scalars['DateTime']['output']>;
  author_id?: Maybe<Scalars['Int']['output']>;
  author_img_path?: Maybe<Scalars['String']['output']>;
  author_name?: Maybe<Scalars['String']['output']>;
  author_status?: Maybe<Scalars['Int']['output']>;
  author_type?: Maybe<Scalars['Int']['output']>;
  author_update_by?: Maybe<Scalars['String']['output']>;
  author_update_date?: Maybe<Scalars['DateTime']['output']>;
};

export type ContentCardDto = {
  __typename?: 'ContentCardDto';
  technical_author?: Maybe<ContentAuthorDto>;
  technical_author_id?: Maybe<Scalars['Int']['output']>;
  technical_create_by?: Maybe<Scalars['Int']['output']>;
  technical_create_date?: Maybe<Scalars['DateTime']['output']>;
  technical_id?: Maybe<Scalars['Int']['output']>;
  technical_img_path?: Maybe<Scalars['String']['output']>;
  technical_name?: Maybe<Scalars['String']['output']>;
  technical_status?: Maybe<Scalars['Int']['output']>;
  technical_update_by?: Maybe<Scalars['Int']['output']>;
  technical_update_date?: Maybe<Scalars['DateTime']['output']>;
  technical_view?: Maybe<Scalars['Int']['output']>;
};

export type ContentCategoryDto = {
  __typename?: 'ContentCategoryDto';
  c_technical_create?: Maybe<Scalars['DateTime']['output']>;
  c_technical_create_by?: Maybe<Scalars['Int']['output']>;
  c_technical_id?: Maybe<Scalars['Int']['output']>;
  c_technical_nameEN?: Maybe<Scalars['String']['output']>;
  c_technical_nameTH?: Maybe<Scalars['String']['output']>;
  c_technical_status?: Maybe<Scalars['Int']['output']>;
  c_technical_update?: Maybe<Scalars['DateTime']['output']>;
  c_technical_update_by?: Maybe<Scalars['Int']['output']>;
};

export type ContentDto = {
  __typename?: 'ContentDto';
  technical_author?: Maybe<ContentAuthorDto>;
  technical_author_id?: Maybe<Scalars['Int']['output']>;
  technical_category?: Maybe<ContentCategoryDto>;
  technical_create_by?: Maybe<Scalars['Int']['output']>;
  technical_create_date?: Maybe<Scalars['DateTime']['output']>;
  technical_detail?: Maybe<Scalars['String']['output']>;
  technical_id?: Maybe<Scalars['Int']['output']>;
  technical_img_path?: Maybe<Scalars['String']['output']>;
  technical_name?: Maybe<Scalars['String']['output']>;
  technical_status?: Maybe<Scalars['Int']['output']>;
  technical_sub_detail?: Maybe<Scalars['String']['output']>;
  technical_type?: Maybe<Scalars['Int']['output']>;
  technical_update_by?: Maybe<Scalars['Int']['output']>;
  technical_update_date?: Maybe<Scalars['DateTime']['output']>;
  technical_view?: Maybe<Scalars['Int']['output']>;
};

export type DiscountConditionDto = {
  __typename?: 'DiscountConditionDto';
  condition_id?: Maybe<Scalars['Int']['output']>;
  condition_status?: Maybe<Scalars['Int']['output']>;
  condition_text?: Maybe<Scalars['String']['output']>;
  discount_id?: Maybe<Scalars['Int']['output']>;
};

export type DiscountDto = {
  __typename?: 'DiscountDto';
  brand?: Maybe<BrandDto>;
  discount_adjunct?: Maybe<Scalars['String']['output']>;
  discount_brand_id?: Maybe<Scalars['Int']['output']>;
  discount_code?: Maybe<Scalars['String']['output']>;
  discount_code_type?: Maybe<Scalars['Int']['output']>;
  discount_condition?: Maybe<Array<DiscountConditionDto>>;
  discount_create_by?: Maybe<Scalars['Int']['output']>;
  discount_create_date?: Maybe<Scalars['DateTime']['output']>;
  discount_duration_end?: Maybe<Scalars['DateTime']['output']>;
  discount_duration_start?: Maybe<Scalars['DateTime']['output']>;
  discount_id?: Maybe<Scalars['Int']['output']>;
  discount_img_path?: Maybe<Scalars['String']['output']>;
  discount_minimum_price?: Maybe<Scalars['Float']['output']>;
  discount_name?: Maybe<Scalars['String']['output']>;
  discount_product_1?: Maybe<Scalars['String']['output']>;
  discount_product_2?: Maybe<Scalars['String']['output']>;
  discount_quantity?: Maybe<Scalars['String']['output']>;
  discount_status?: Maybe<Scalars['Int']['output']>;
  discount_type?: Maybe<Scalars['Int']['output']>;
  discount_type_amount?: Maybe<Scalars['String']['output']>;
  discount_update?: Maybe<Scalars['DateTime']['output']>;
  discount_update_by?: Maybe<Scalars['Int']['output']>;
};

export type FlashPageBanners = {
  __typename?: 'FlashPageBanners';
  top: Array<BannersDto>;
};

export type FlashSaleDto = {
  __typename?: 'FlashSaleDto';
  flash_create?: Maybe<Scalars['DateTime']['output']>;
  flash_create_by?: Maybe<Scalars['Int']['output']>;
  flash_end?: Maybe<Scalars['DateTime']['output']>;
  flash_frame_template_path?: Maybe<Scalars['String']['output']>;
  flash_id?: Maybe<Scalars['Int']['output']>;
  flash_start?: Maybe<Scalars['DateTime']['output']>;
  flash_status?: Maybe<Scalars['Int']['output']>;
  flash_update?: Maybe<Scalars['DateTime']['output']>;
  flash_update_by?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Array<FlashSaleItemDto>>;
};

export type FlashSaleItemDto = {
  __typename?: 'FlashSaleItemDto';
  flt_amount?: Maybe<Scalars['Int']['output']>;
  flt_amount_sale?: Maybe<Scalars['Int']['output']>;
  flt_create?: Maybe<Scalars['DateTime']['output']>;
  flt_create_by?: Maybe<Scalars['Int']['output']>;
  flt_discount_price?: Maybe<Scalars['Float']['output']>;
  flt_flash_id?: Maybe<Scalars['Int']['output']>;
  flt_id?: Maybe<Scalars['Int']['output']>;
  flt_product_id?: Maybe<Scalars['Int']['output']>;
  flt_status?: Maybe<Scalars['Int']['output']>;
  flt_type_by?: Maybe<Scalars['Int']['output']>;
  flt_type_discount?: Maybe<Scalars['Int']['output']>;
  flt_update?: Maybe<Scalars['DateTime']['output']>;
  flt_update_by?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Array<ProductDto>>;
};

export type KnowledgePageBanners = {
  __typename?: 'KnowledgePageBanners';
  top: Array<BannersDto>;
};

export type MainPageBanners = {
  __typename?: 'MainPageBanners';
  flash: Array<BannersDto>;
  mall: Array<BannersDto>;
  promotion: Array<BannersDto>;
  top: Array<BannersDto>;
};

export type MallPageBanners = {
  __typename?: 'MallPageBanners';
  flash: Array<BannersDto>;
  top: Array<BannersDto>;
};

export type PopularProductDto = {
  __typename?: 'PopularProductDto';
  pplp_create_by?: Maybe<Scalars['Int']['output']>;
  pplp_create_date?: Maybe<Scalars['DateTime']['output']>;
  pplp_id?: Maybe<Scalars['Int']['output']>;
  pplp_pd_id?: Maybe<Scalars['Int']['output']>;
  pplp_status?: Maybe<Scalars['Int']['output']>;
  pplp_update_by?: Maybe<Scalars['Int']['output']>;
  pplp_update_date?: Maybe<Scalars['DateTime']['output']>;
  product?: Maybe<ProductDto>;
};

export type ProductCategoryDto = {
  __typename?: 'ProductCategoryDto';
  prod_brand_id?: Maybe<Scalars['String']['output']>;
  prod_create?: Maybe<Scalars['DateTime']['output']>;
  prod_icon?: Maybe<Scalars['String']['output']>;
  prod_icon_path?: Maybe<Scalars['String']['output']>;
  prod_id?: Maybe<Scalars['Int']['output']>;
  prod_image?: Maybe<Scalars['String']['output']>;
  prod_image_path?: Maybe<Scalars['String']['output']>;
  prod_name_en?: Maybe<Scalars['String']['output']>;
  prod_name_th?: Maybe<Scalars['String']['output']>;
  prod_status?: Maybe<Scalars['Int']['output']>;
  prod_update?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductDto = {
  __typename?: 'ProductDto';
  brand?: Maybe<BrandDto>;
  pd_brand?: Maybe<Scalars['Int']['output']>;
  pd_cadFile?: Maybe<Scalars['String']['output']>;
  pd_catalog_file?: Maybe<Scalars['String']['output']>;
  pd_cateL1_object?: Maybe<ProductCategoryDto>;
  pd_cateL2_object?: Maybe<ProductSubCategoryDto>;
  pd_cateL3_object?: Maybe<ProductSubCategoryLv3Dto>;
  pd_cate_l1?: Maybe<Scalars['Int']['output']>;
  pd_cate_l2?: Maybe<Scalars['Int']['output']>;
  pd_cate_l3?: Maybe<Scalars['Int']['output']>;
  pd_create?: Maybe<Scalars['DateTime']['output']>;
  pd_create_by?: Maybe<Scalars['Int']['output']>;
  pd_delivery_same_day?: Maybe<Scalars['String']['output']>;
  pd_description_en?: Maybe<Scalars['String']['output']>;
  pd_description_th?: Maybe<Scalars['String']['output']>;
  pd_dimension?: Maybe<Scalars['String']['output']>;
  pd_discount?: Maybe<Scalars['Int']['output']>;
  pd_id?: Maybe<Scalars['Int']['output']>;
  pd_lead_time?: Maybe<Scalars['String']['output']>;
  pd_model?: Maybe<Scalars['String']['output']>;
  pd_model_object?: Maybe<ProductModelDto>;
  pd_moq?: Maybe<Scalars['String']['output']>;
  pd_name_en?: Maybe<Scalars['String']['output']>;
  pd_name_th?: Maybe<Scalars['String']['output']>;
  pd_package_dimension?: Maybe<Scalars['String']['output']>;
  pd_photo_file?: Maybe<Scalars['String']['output']>;
  pd_qty_per_pcs?: Maybe<Scalars['String']['output']>;
  pd_sales?: Maybe<Scalars['Int']['output']>;
  pd_sell_price?: Maybe<Scalars['Float']['output']>;
  pd_sku?: Maybe<Scalars['String']['output']>;
  pd_standard_price?: Maybe<Scalars['Float']['output']>;
  pd_star?: Maybe<Scalars['Int']['output']>;
  pd_status?: Maybe<Scalars['Int']['output']>;
  pd_stock?: Maybe<Scalars['Int']['output']>;
  pd_supplier_id?: Maybe<Scalars['String']['output']>;
  pd_type?: Maybe<Scalars['Int']['output']>;
  pd_update?: Maybe<Scalars['DateTime']['output']>;
  pd_update_by?: Maybe<Scalars['Int']['output']>;
  pd_visit?: Maybe<Scalars['Int']['output']>;
  pd_weight?: Maybe<Scalars['String']['output']>;
  supplier_create?: Maybe<Scalars['String']['output']>;
};

export type ProductModelDto = {
  __typename?: 'ProductModelDto';
  model_aup_day?: Maybe<Scalars['String']['output']>;
  model_create?: Maybe<Scalars['DateTime']['output']>;
  model_default?: Maybe<Scalars['Float']['output']>;
  model_discount_Important_customers?: Maybe<Scalars['Float']['output']>;
  model_discount_Important_vip?: Maybe<Scalars['Float']['output']>;
  model_id?: Maybe<Scalars['Int']['output']>;
  model_mark_up1?: Maybe<Scalars['Float']['output']>;
  model_mark_up2?: Maybe<Scalars['Float']['output']>;
  model_moq?: Maybe<Scalars['Float']['output']>;
  model_name?: Maybe<Scalars['String']['output']>;
  model_number?: Maybe<Scalars['Float']['output']>;
  model_package_dimension?: Maybe<Scalars['String']['output']>;
  model_pd_id?: Maybe<Scalars['Int']['output']>;
  model_price?: Maybe<Scalars['Float']['output']>;
  model_price_Important?: Maybe<Scalars['String']['output']>;
  model_price_discount?: Maybe<Scalars['Float']['output']>;
  model_price_general?: Maybe<Scalars['Float']['output']>;
  model_price_stand?: Maybe<Scalars['String']['output']>;
  model_price_sub?: Maybe<Scalars['DateTime']['output']>;
  model_price_tkk?: Maybe<Scalars['Float']['output']>;
  model_price_vip?: Maybe<Scalars['String']['output']>;
  model_product_dimension?: Maybe<Scalars['String']['output']>;
  model_status?: Maybe<Scalars['Int']['output']>;
  model_update?: Maybe<Scalars['DateTime']['output']>;
  model_waranty?: Maybe<Scalars['String']['output']>;
  model_weight?: Maybe<Scalars['String']['output']>;
};

export type ProductSubCategoryDto = {
  __typename?: 'ProductSubCategoryDto';
  prod_name_th?: Maybe<Scalars['String']['output']>;
  prods_create?: Maybe<Scalars['DateTime']['output']>;
  prods_id?: Maybe<Scalars['Int']['output']>;
  prods_img?: Maybe<Scalars['String']['output']>;
  prods_name_en?: Maybe<Scalars['String']['output']>;
  prods_prod_id?: Maybe<Scalars['Int']['output']>;
  prods_status?: Maybe<Scalars['Int']['output']>;
  prods_update?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductSubCategoryLv3Dto = {
  __typename?: 'ProductSubCategoryLv3Dto';
  prodslv3_create?: Maybe<Scalars['DateTime']['output']>;
  prodslv3_id?: Maybe<Scalars['Int']['output']>;
  prodslv3_name_en?: Maybe<Scalars['String']['output']>;
  prodslv3_name_th?: Maybe<Scalars['String']['output']>;
  prodslv3_prods_id?: Maybe<Scalars['Int']['output']>;
  prodslv3_status?: Maybe<Scalars['Int']['output']>;
  prodslv3_update?: Maybe<Scalars['DateTime']['output']>;
};

export type PromotionDto = {
  __typename?: 'PromotionDto';
  brand?: Maybe<BrandDto>;
  category?: Maybe<ProductCategoryDto>;
  category2?: Maybe<ProductCategoryDto>;
  promotion_brand_id?: Maybe<Scalars['Int']['output']>;
  promotion_cateL1_1?: Maybe<Scalars['Int']['output']>;
  promotion_cateL1_2?: Maybe<Scalars['Int']['output']>;
  promotion_course?: Maybe<Scalars['String']['output']>;
  promotion_create_by?: Maybe<Scalars['Int']['output']>;
  promotion_create_date?: Maybe<Scalars['DateTime']['output']>;
  promotion_details?: Maybe<Scalars['String']['output']>;
  promotion_discount?: Maybe<Scalars['Int']['output']>;
  promotion_duration_end?: Maybe<Scalars['DateTime']['output']>;
  promotion_duration_start?: Maybe<Scalars['DateTime']['output']>;
  promotion_id?: Maybe<Scalars['Int']['output']>;
  promotion_img_banner_path?: Maybe<Scalars['String']['output']>;
  promotion_img_path?: Maybe<Scalars['String']['output']>;
  promotion_model_name?: Maybe<Scalars['String']['output']>;
  promotion_name?: Maybe<Scalars['String']['output']>;
  promotion_other_item_list?: Maybe<Scalars['String']['output']>;
  promotion_pd_model?: Maybe<Scalars['String']['output']>;
  promotion_status?: Maybe<Scalars['Int']['output']>;
  promotion_type?: Maybe<Scalars['Int']['output']>;
  promotion_update_by?: Maybe<Scalars['Int']['output']>;
  promotion_update_date?: Maybe<Scalars['DateTime']['output']>;
};

export type Query = {
  __typename?: 'Query';
  filterProductCategory?: Maybe<ResponseProductSubCategoryModel>;
  getBannerList?: Maybe<ResponseBanners>;
  getBrandDiscount?: Maybe<ResponseBrandDiscountModel>;
  getBrandList?: Maybe<ResponseBrandListModel>;
  getBrandRecommend?: Maybe<ResponseBrandRecommendModel>;
  getBrandTop?: Maybe<ResponseBrandTopModel>;
  getContentAuthor?: Maybe<ResponseContentAuthor>;
  getContentByCategory?: Maybe<ResponseContentCard>;
  getContentCard?: Maybe<ResponseContentCard>;
  getContentCategory?: Maybe<ResponseContentCategory>;
  getContentDetail?: Maybe<ResponseContent>;
  getDiscountList?: Maybe<ResponseDiscountModel>;
  getFlashSaleList?: Maybe<ResponseFlashSaleModel>;
  getPopularProducts?: Maybe<ResponsePopularProductsModel>;
  getProductById?: Maybe<ProductDto>;
  getProductCategory?: Maybe<ResponseProductCategoryModel>;
  getProductDetailById?: Maybe<ProductDto>;
  getProductModel?: Maybe<ResponseProductModelModel>;
  getProductSubCategory?: Maybe<ResponseProductSubCategoryModel>;
  getProductSubCategoryLv3?: Maybe<ResponseProductSubCategoryLv3Model>;
  getProducts?: Maybe<ResponseProductsModel>;
  getPromotionList?: Maybe<ResponsePromotionModel>;
  getRewardList?: Maybe<ResponseRewardModel>;
  getSearchText?: Maybe<ResponseProductSearchTextModel>;
  getSolutionCategoryList?: Maybe<ResponseSolutionCategoryModel>;
  getSolutionList?: Maybe<ResponseSolutionModel>;
  getSolutionPartnerList?: Maybe<ResponseSolutionPartnerModel>;
  hello: Scalars['String']['output'];
  helloWorld: Scalars['String']['output'];
};

export type QueryFilterProductCategoryArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetBrandDiscountArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetBrandListArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetBrandRecommendArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetBrandTopArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetContentAuthorArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetContentByCategoryArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetContentCardArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetContentCategoryArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetContentDetailArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetDiscountListArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetFlashSaleListArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetPopularProductsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetProductByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetProductCategoryArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetProductDetailByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetProductModelArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetProductSubCategoryArgs = {
  id: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetProductSubCategoryLv3Args = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetProductsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetPromotionListArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetRewardListArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetSearchTextArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetSolutionCategoryListArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetSolutionListArgs = {
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDir?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetSolutionPartnerListArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryHelloArgs = {
  name: Scalars['String']['input'];
};

export type ResponseBanners = {
  __typename?: 'ResponseBanners';
  banners: ResponseBannersModel;
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  per_page: Scalars['Int']['output'];
  total_count: Scalars['Int']['output'];
};

export type ResponseBannersModel = {
  __typename?: 'ResponseBannersModel';
  flash_page: FlashPageBanners;
  knowledge_page: KnowledgePageBanners;
  main_page: MainPageBanners;
  mall_page: MallPageBanners;
  reward_page: RewardPageBanners;
  solution_page: SolutionPageBanners;
};

export type ResponseBrandDiscountModel = {
  __typename?: 'ResponseBrandDiscountModel';
  brand_discount: Array<BrandDiscountDto>;
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  per_page: Scalars['Int']['output'];
  total_count: Scalars['Int']['output'];
};

export type ResponseBrandListModel = {
  __typename?: 'ResponseBrandListModel';
  brand_list: Array<BrandListDto>;
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  per_page: Scalars['Int']['output'];
  total_count: Scalars['Int']['output'];
};

export type ResponseBrandRecommendModel = {
  __typename?: 'ResponseBrandRecommendModel';
  brandRecommend: Array<BrandRecommendDto>;
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  per_page: Scalars['Int']['output'];
  total_count: Scalars['Int']['output'];
};

export type ResponseBrandTopModel = {
  __typename?: 'ResponseBrandTopModel';
  brand_top: Array<BrandTopDto>;
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  per_page: Scalars['Int']['output'];
  total_count: Scalars['Int']['output'];
};

export type ResponseContent = {
  __typename?: 'ResponseContent';
  content: ContentDto;
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  per_page: Scalars['Int']['output'];
  total_count: Scalars['Int']['output'];
};

export type ResponseContentAuthor = {
  __typename?: 'ResponseContentAuthor';
  content_author: Array<ContentAuthorDto>;
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  per_page: Scalars['Int']['output'];
  total_count: Scalars['Int']['output'];
};

export type ResponseContentCard = {
  __typename?: 'ResponseContentCard';
  content: Array<ContentCardDto>;
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  per_page: Scalars['Int']['output'];
  total_count: Scalars['Int']['output'];
};

export type ResponseContentCategory = {
  __typename?: 'ResponseContentCategory';
  content_category: Array<ContentCategoryDto>;
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  per_page: Scalars['Int']['output'];
  total_count: Scalars['Int']['output'];
};

export type ResponseDiscountModel = {
  __typename?: 'ResponseDiscountModel';
  current_page: Scalars['Int']['output'];
  discount: Array<DiscountDto>;
  has_next_page: Scalars['Boolean']['output'];
  per_page: Scalars['Int']['output'];
  total_count: Scalars['Int']['output'];
};

export type ResponseFlashSaleModel = {
  __typename?: 'ResponseFlashSaleModel';
  current_page: Scalars['Int']['output'];
  flashsale: Array<FlashSaleDto>;
  has_next_page: Scalars['Boolean']['output'];
  per_page: Scalars['Int']['output'];
  total_count: Scalars['Int']['output'];
};

export type ResponsePopularProductsModel = {
  __typename?: 'ResponsePopularProductsModel';
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  per_page: Scalars['Int']['output'];
  popular_products: Array<PopularProductDto>;
  total_count: Scalars['Int']['output'];
};

export type ResponseProductCategoryModel = {
  __typename?: 'ResponseProductCategoryModel';
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  per_page: Scalars['Int']['output'];
  product_category: Array<ProductCategoryDto>;
  total_count: Scalars['Int']['output'];
};

export type ResponseProductModelModel = {
  __typename?: 'ResponseProductModelModel';
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  per_page: Scalars['Int']['output'];
  product_model: Array<ProductModelDto>;
  total_count: Scalars['Int']['output'];
};

export type ResponseProductSearchTextModel = {
  __typename?: 'ResponseProductSearchTextModel';
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  per_page: Scalars['Int']['output'];
  search_text: Array<SearchTextDto>;
  total_count: Scalars['Int']['output'];
};

export type ResponseProductSubCategoryLv3Model = {
  __typename?: 'ResponseProductSubCategoryLv3Model';
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  per_page: Scalars['Int']['output'];
  product_sub_category: Array<ProductSubCategoryLv3Dto>;
  total_count: Scalars['Int']['output'];
};

export type ResponseProductSubCategoryModel = {
  __typename?: 'ResponseProductSubCategoryModel';
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  per_page: Scalars['Int']['output'];
  product_sub_category: Array<ProductSubCategoryDto>;
  total_count: Scalars['Int']['output'];
};

export type ResponseProductsModel = {
  __typename?: 'ResponseProductsModel';
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  per_page: Scalars['Int']['output'];
  products: Array<ProductDto>;
  total_count: Scalars['Int']['output'];
};

export type ResponsePromotionModel = {
  __typename?: 'ResponsePromotionModel';
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  per_page: Scalars['Int']['output'];
  promotion: Array<PromotionDto>;
  total_count: Scalars['Int']['output'];
};

export type ResponseRewardModel = {
  __typename?: 'ResponseRewardModel';
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  per_page: Scalars['Int']['output'];
  reward: Array<RewardDto>;
  total_count: Scalars['Int']['output'];
};

export type ResponseSolutionCategoryModel = {
  __typename?: 'ResponseSolutionCategoryModel';
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  per_page: Scalars['Int']['output'];
  solution_category: Array<SolutionCategoryDto>;
  total_count: Scalars['Int']['output'];
};

export type ResponseSolutionModel = {
  __typename?: 'ResponseSolutionModel';
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  per_page: Scalars['Int']['output'];
  solution: Array<SolutionDto>;
  total_count: Scalars['Int']['output'];
};

export type ResponseSolutionPartnerModel = {
  __typename?: 'ResponseSolutionPartnerModel';
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  per_page: Scalars['Int']['output'];
  solution_partner: Array<SolutionPartnerDto>;
  total_count: Scalars['Int']['output'];
};

export type RewardDto = {
  __typename?: 'RewardDto';
  reward_branch?: Maybe<Scalars['String']['output']>;
  reward_brand_id?: Maybe<Scalars['Int']['output']>;
  reward_coins?: Maybe<Scalars['Int']['output']>;
  reward_coupon_voucher?: Maybe<Scalars['String']['output']>;
  reward_create_by?: Maybe<Scalars['Int']['output']>;
  reward_create_date?: Maybe<Scalars['DateTime']['output']>;
  reward_details?: Maybe<Scalars['String']['output']>;
  reward_discount_type?: Maybe<Scalars['Int']['output']>;
  reward_discount_type_amount?: Maybe<Scalars['String']['output']>;
  reward_duration_end?: Maybe<Scalars['DateTime']['output']>;
  reward_duration_start?: Maybe<Scalars['DateTime']['output']>;
  reward_id?: Maybe<Scalars['Int']['output']>;
  reward_img_cover?: Maybe<Scalars['String']['output']>;
  reward_img_path?: Maybe<Scalars['String']['output']>;
  reward_model_name?: Maybe<Scalars['String']['output']>;
  reward_name?: Maybe<Scalars['String']['output']>;
  reward_number?: Maybe<Scalars['Int']['output']>;
  reward_status?: Maybe<Scalars['Int']['output']>;
  reward_type?: Maybe<Scalars['Int']['output']>;
  reward_type_sub?: Maybe<Scalars['Int']['output']>;
  reward_unipoint?: Maybe<Scalars['String']['output']>;
  reward_update_by?: Maybe<Scalars['Int']['output']>;
  reward_update_date?: Maybe<Scalars['DateTime']['output']>;
  sub_type_obj?: Maybe<RewardTypeDto>;
  type_obj?: Maybe<RewardTypeDto>;
};

export type RewardPageBanners = {
  __typename?: 'RewardPageBanners';
  top: Array<BannersDto>;
};

export type RewardTypeDto = {
  __typename?: 'RewardTypeDto';
  reward_type_icon?: Maybe<Scalars['String']['output']>;
  reward_type_id?: Maybe<Scalars['Int']['output']>;
  reward_type_name?: Maybe<Scalars['String']['output']>;
};

export type SearchTextDto = {
  __typename?: 'SearchTextDto';
  searchtext_by?: Maybe<Scalars['String']['output']>;
  searchtext_date?: Maybe<Scalars['String']['output']>;
  searchtext_id: Scalars['Int']['output'];
  searchtext_message?: Maybe<Scalars['String']['output']>;
  searchtext_message_cn?: Maybe<Scalars['String']['output']>;
  searchtext_message_en?: Maybe<Scalars['String']['output']>;
  searchtext_message_ja?: Maybe<Scalars['String']['output']>;
};

export type SolutionCategoryDto = {
  __typename?: 'SolutionCategoryDto';
  c_solution_create?: Maybe<Scalars['DateTime']['output']>;
  c_solution_create_by?: Maybe<Scalars['Int']['output']>;
  c_solution_icon?: Maybe<Scalars['String']['output']>;
  c_solution_icon_path?: Maybe<Scalars['String']['output']>;
  c_solution_id?: Maybe<Scalars['Int']['output']>;
  c_solution_name_en?: Maybe<Scalars['String']['output']>;
  c_solution_name_th?: Maybe<Scalars['String']['output']>;
  c_solution_status?: Maybe<Scalars['Int']['output']>;
  c_solution_update?: Maybe<Scalars['DateTime']['output']>;
  c_solution_update_by?: Maybe<Scalars['Int']['output']>;
  solution_category_sub?: Maybe<Array<SolutionCategorySubDto>>;
};

export type SolutionCategorySubDto = {
  __typename?: 'SolutionCategorySubDto';
  c_solution_icon_path?: Maybe<Scalars['String']['output']>;
  c_solution_status?: Maybe<Scalars['Int']['output']>;
  scs_c_solution_id?: Maybe<Scalars['Int']['output']>;
  scs_create_by?: Maybe<Scalars['Int']['output']>;
  scs_create_date?: Maybe<Scalars['DateTime']['output']>;
  scs_id?: Maybe<Scalars['Int']['output']>;
  scs_name_en?: Maybe<Scalars['String']['output']>;
  scs_name_th?: Maybe<Scalars['String']['output']>;
  scs_picture_path?: Maybe<Scalars['String']['output']>;
  scs_status?: Maybe<Scalars['Int']['output']>;
  scs_update_by?: Maybe<Scalars['Int']['output']>;
  scs_update_date?: Maybe<Scalars['DateTime']['output']>;
};

export type SolutionDto = {
  __typename?: 'SolutionDto';
  solution_area?: Maybe<Scalars['String']['output']>;
  solution_area_list?: Maybe<Array<Scalars['String']['output']>>;
  solution_c_solution_id?: Maybe<Scalars['Int']['output']>;
  solution_category?: Maybe<SolutionCategoryDto>;
  solution_category_sub?: Maybe<SolutionCategorySubDto>;
  solution_code?: Maybe<Scalars['String']['output']>;
  solution_cover_path?: Maybe<Scalars['String']['output']>;
  solution_create?: Maybe<Scalars['DateTime']['output']>;
  solution_create_by?: Maybe<Scalars['Int']['output']>;
  solution_cs_solution_id?: Maybe<Scalars['Int']['output']>;
  solution_details?: Maybe<Scalars['String']['output']>;
  solution_id?: Maybe<Scalars['Int']['output']>;
  solution_img_path?: Maybe<Scalars['String']['output']>;
  solution_install_by?: Maybe<Scalars['String']['output']>;
  solution_more?: Maybe<Scalars['String']['output']>;
  solution_name?: Maybe<Scalars['String']['output']>;
  solution_number?: Maybe<Scalars['Int']['output']>;
  solution_rating?: Maybe<Scalars['Int']['output']>;
  solution_service_count?: Maybe<Scalars['Int']['output']>;
  solution_status?: Maybe<Scalars['Int']['output']>;
  solution_type?: Maybe<Scalars['Int']['output']>;
  solution_update?: Maybe<Scalars['DateTime']['output']>;
  solution_update_by?: Maybe<Scalars['Int']['output']>;
};

export type SolutionPageBanners = {
  __typename?: 'SolutionPageBanners';
  top: Array<BannersDto>;
};

export type SolutionPartnerDto = {
  __typename?: 'SolutionPartnerDto';
  solution_partner_create?: Maybe<Scalars['DateTime']['output']>;
  solution_partner_create_by?: Maybe<Scalars['Int']['output']>;
  solution_partner_id?: Maybe<Scalars['Int']['output']>;
  solution_partner_name?: Maybe<Scalars['String']['output']>;
  solution_partner_status?: Maybe<Scalars['String']['output']>;
  solution_partner_update?: Maybe<Scalars['DateTime']['output']>;
  solution_partner_update_by?: Maybe<Scalars['Int']['output']>;
};
