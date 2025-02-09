import { type ThemeVariables } from 'types/theme';
import {
  iconApple,
  iconCheck,
  iconCheckCircleOutline,
  iconCircle,
  iconCircleAccept,
  iconFacebook,
  iconGoogle,
  iconLine,
  iconLock,
  iconReload,
  iconArrowLeft,
  iconSMS,
  iconArrowDown,
  iconLocation,
  iconAlert,
  iconSearch,
  iconCart,
  iconAlertNotify,
  iconUnistore,
  iconSeeMore,
  iconBuyProducts,
  iconCourse,
  iconProfile2user,
  iconServiceWork,
  iconShoppingcart,
  iconFlashSale,
  iconUnisolution,
  iconUnilearn,
  iconClock,
  iconBoxtick,
  iconFavorite,
  iconShare,
  iconTruckfast,
  iconWarning2,
  iconCopy,
  iconStar,
  iconArrowRight,
  iconTrashcan,
  iconView,
  iconCar,
  iconEdit,
  iconDelete,
  iconBook1,
  iconBook2,
  iconWarning1,
  iconPlay,
  iconCertificate,
  iconTimer,
  iconWatch,
  iconAvatar,
  learnCateEngineer,
  learnCateAdmin,
  learnCateDesign,
  learnCateManagement,
  learnCateMarketing,
  learnCateNetwork,
  learnCateSales,
  learnCateTechnical,
  iconAddcircle,
  iconBrifecasetick,
  iconDatepicker,
  iconCircleCheck,
  iconSolutionFail,
  iconBookingIndex,
  iconSetting2,
  iconDelivery,
  iconChat,
  iconCourseProfile,
  iconHeartadd,
  iconInvoice,
  iconIsolation,
  iconLocationProfile,
  iconPayment,
  iconAdd,
  iconRemove,
  iconClose,
  iconCoin,
  iconCoupon,
  iconMasterCard,
  iconVisa,
  iconThaiQR,
  iconDownload,
  iconCheckCircle,
  startLearn,
  iconUnipoint,
  iconCircleArrowRight,
  iconLike,
  iconDiscount,
  iconOther,
  iconProduct,
  iconReward,
  iconCoupon2,
  iconReceiptitem,
  iconTH,
  iconCancel,
  iconCancel2,
  iconCancel3,
  iconCamera,
  iconArrowUp,
  iconArrowUpWhite,
  playlistPlus,
  motionPlay,
  exam,
} from './assets/images/icons';
import { pointUnipoint } from './assets/images/point';
import {
  CommunityCopyLink,
  CommunityFacebook,
  CommunityLine,
} from './assets/images/community';
import {
  menuAllProducts,
  menuCatalog,
  menuCommunityAndArticles,
  menuDiscountCode,
  menuFlashStore,
  menuGoodDeals,
  menuOther,
  menuPrivilegesAndPoints,
  menuService,
  menuSolution,
  menuTopBrand,
} from './assets/images/menu';
import {
  promotionCoupon,
  promotionHistory,
  promotionReward,
} from './assets/images/promotions';

/*
icons ที่เป็น svg ให้ใช้แบบนี้
a: iconA,

icons หรือ Image ที่เป็น png ให้ใช้แบบนี้
a: require('./assets/images/a.png'),

svg folder icon จะต้องเปลี่ยนสีได้ โดยใส่ currentColor
svg ที่เปลี่ยนสีไม่ได้ให้ตั้ง folder เฉพาะของ module นั้นๆ
*/

export default function ({}: ThemeVariables) {
  return {
    address: {
      empty: require('./assets/images/address/address-empty.png'),
    },
    bg: {
      a: require('./assets/images/background/style-0.png'),
      b: require('./assets/images/background/style-1.png'),
      c: require('./assets/images/background/style-2.png'),
      d: require('./assets/images/background/style-3.png'),
      e: require('./assets/images/background/style-4.png'),
      f: require('./assets/images/background/style-5.png'),
      g: require('./assets/images/background/style-6.png'),
      h: require('./assets/images/background/style-7.png'),
      i: require('./assets/images/background/style-8.png'),
      j: require('./assets/images/background/style-9.png'),
      k: require('./assets/images/background/style-10.png'),
      l: require('./assets/images/background/style-11.png'),
      m: require('./assets/images/background/style-12.png'),
    },
    brand: {
      exclusive: require('./assets/images/brand/exclusive-brand.png'),
      gracoLogo: require('./assets/images/brand/graco-logo.png'),
      hitachi: require('./assets/images/brand/hitachi-brand.png'),
      hitachiLogo: require('./assets/images/brand/hitachi-logo.png'),
    },
    button: {
      apple: iconApple,
      facebook: iconFacebook,
      google: iconGoogle,
      line: iconLine,
    },
    carousel: {
      a: require('./assets/images/carousel/carousel-1.png'),
    },
    cart: {
      empty: require('./assets/images/cart/cart-empty.png'),
    },
    catalog: {
      a: require('./assets/images/catalog/c-1.png'),
      b: require('./assets/images/catalog/c-2.png'),
      c: require('./assets/images/catalog/c-3.png'),
      d: require('./assets/images/catalog/c-4.png'),
      mockA: require('./assets/images/catalog/mock-1.png'),
      mockB: require('./assets/images/catalog/mock-2.png'),
      mockC: require('./assets/images/catalog/mock-3.png'),
      mockD: require('./assets/images/catalog/mock-4.png'),
      mockE: require('./assets/images/catalog/mock-5.png'),
      mockF: require('./assets/images/catalog/mock-6.png'),
      mockG: require('./assets/images/catalog/mock-7.png'),
      mockH: require('./assets/images/catalog/mock-8.png'),
    },
    category: {
      a: require('./assets/images/category/mock-icon-1.png'),
    },
    community: {
      a: require('./assets/images/community/community-1.png'),
      brand: {
        a: require('./assets/images/community/community-brand-1.png'),
      },
      content: require('./assets/images/community/community-content-1.png'),
      content2: require('./assets/images/community/community-content-2.png'),
      copyLink: CommunityCopyLink,
      facebook: CommunityFacebook,
      line: CommunityLine,
      logo: require('./assets/images/community/community-content-logo.png'),
    },
    coupon: {
      empty: require('./assets/images/coupon/coupon-empty.png'),
    },
    icons: {
      add: iconAdd,
      addcircle: iconAddcircle,
      alert: iconAlert,
      alertNotify: iconAlertNotify,
      arrowDown: iconArrowDown,
      arrowLeft: iconArrowLeft,
      arrowRight: iconArrowRight,
      arrowUpWhite: iconArrowUpWhite,
      avatar: iconAvatar,
      book1: iconBook1,
      book2: iconBook2,
      bookingIndex: iconBookingIndex,
      boxtick: iconBoxtick,
      brifecasetick: iconBrifecasetick,
      buyProducts: iconBuyProducts,
      car: iconCar,
      cart: iconCart,
      certificate: iconCertificate,
      chat: iconChat,
      check: iconCheck,
      checkCircle: iconCheckCircle,
      checkCircleOutline: iconCheckCircleOutline,
      circle: iconCircle,
      circleAccept: iconCircleAccept,
      circleArrowRight: iconCircleArrowRight,
      circleCheck: iconCircleCheck,
      clock: iconClock,
      close: iconClose,
      coin: iconCoin,
      copy: iconCopy,
      coupon: iconCoupon,
      coupon2: iconCoupon2,
      course: iconCourse,
      courseProfile: iconCourseProfile,
      datepicker: iconDatepicker,
      delete: iconDelete,
      delivery: iconDelivery,
      discount: iconDiscount,
      download: iconDownload,
      edit: iconEdit,
      favorite: iconFavorite,
      flashSale: iconFlashSale,
      heartadd: iconHeartadd,
      invoice: iconInvoice,
      isolation: iconIsolation,
      like: iconLike,
      location: iconLocation,
      locationProfile: iconLocationProfile,
      lock: iconLock,
      mastercard: iconMasterCard,
      other: iconOther,
      payment: iconPayment,
      play: iconPlay,
      product: iconProduct,
      profile2user: iconProfile2user,
      receiptitem: iconReceiptitem,
      reload: iconReload,
      remove: iconRemove,
      reward: iconReward,
      search: iconSearch,
      seeMore: iconSeeMore,
      serviceWork: iconServiceWork,
      setting2: iconSetting2,
      share: iconShare,
      shoppingcart: iconShoppingcart,
      sms: iconSMS,
      solutionFail: iconSolutionFail,
      star: iconStar,
      startLearn: startLearn,
      thaiqr: iconThaiQR,
      timer: iconTimer,
      trashcan: iconTrashcan,
      truckfast: iconTruckfast,
      unilearn: iconUnilearn,
      unipoint: iconUnipoint,
      unisolution: iconUnisolution,
      unistore: iconUnistore,
      view: iconView,
      visa: iconVisa,
      warning1: iconWarning1,
      warning2: iconWarning2,
      watch: iconWatch,
      th: iconTH,
      cancel1: iconCancel,
      cancel2: iconCancel2,
      cancel3: iconCancel3,
      camera: iconCamera,
      playlistPlus: playlistPlus,
      motionPlay: motionPlay,
      exam: exam,
    },
    learn: {
      brand: require('./assets/images/learn/learn-brand.png'),
      detail: require('./assets/images/learn/learn-detail.png'),
      learnCateAdmin: learnCateAdmin,
      learnCateDesign: learnCateDesign,
      learnCateEngineer: learnCateEngineer,
      learnCateManagement: learnCateManagement,
      learnCateMarketing: learnCateMarketing,
      learnCateNetwork: learnCateNetwork,
      learnCateSales: learnCateSales,
      learnCateTechnical: learnCateTechnical,
      logo: require('./assets/images/learn/learn-logo.png'),
      mock: require('./assets/images/learn/learn-mock.png'),
      mock2: require('./assets/images/learn/learn-mock-2.png'),
    },
    logo: require('./assets/images/brand/brand.png'),
    menu: {
      allProducts: menuAllProducts,
      catalog: menuCatalog,
      communityAndArticles: menuCommunityAndArticles,
      discountCode: menuDiscountCode,
      flashStore: menuFlashStore,
      goodDeals: menuGoodDeals,
      other: menuOther,
      privilegesAndPoints: menuPrivilegesAndPoints,
      service: menuService,
      solution: menuSolution,
      topBrand: menuTopBrand,
    },
    mock: {
      a: require('./assets/images/mock/mock-1.png'),
      b: require('./assets/images/mock/mock-2.png'),
      c: require('./assets/images/mock/mock-3.png'),
      description: require('./assets/images/mock/description-1.png'),
      flashSale: require('./assets/images/mock/flash-sale.png'),
      flashSalrProduct: require('./assets/images/mock/flash-sale-product.png'),
      idec: require('./assets/images/mock/idec.png'),
      noImage: require('./assets/images/mock/no-image.png'),
      notification: require('./assets/images/mock/notification.png'),
      promotionPoint: require('./assets/images/mock/promotion-point.png'),
      solution: require('./assets/images/mock/solution.png'),
    },
    order: {
      dhl: require('./assets/images/order/order-dhl.png'),
      empty: require('./assets/images/order/order-empty.png'),
      mock: require('./assets/images/order/order-mock.png'),
    },
    pdpa: {
      macord_a: require('./assets/images/pdpa/pdpa-macord-1.png'),
      macord_b: require('./assets/images/pdpa/pdpa-macord-2.png'),
      macord_c: require('./assets/images/pdpa/pdpa-macord-3.png'),
      macord_d: require('./assets/images/pdpa/pdpa-macord-4.png'),
      macord_e: require('./assets/images/pdpa/pdpa-macord-5.png'),
      macord_f: require('./assets/images/pdpa/pdpa-macord-6.png'),
      thailand: require('./assets/images/pdpa/pdpa-thailand.png'),
      unifly: require('./assets/images/pdpa/pdpa-unifly.png'),
      unilearn: require('./assets/images/pdpa/pdpa-unilearn.png'),
      unipoint: require('./assets/images/pdpa/pdpa-unipoint.png'),
      unisolution: require('./assets/images/pdpa/pdpa-unisolution.png'),
      unistore: require('./assets/images/pdpa/pdpa-unistore.png'),
    },
    point: {
      unipoint: pointUnipoint,
    },
    profile: {
      box: require('./assets/images/profile/profile-box.png'),
      deliveryCar: require('./assets/images/profile/profile-delivery-car.png'),
      shoppingBag: require('./assets/images/profile/profile-shopping-bag.png'),
      wallet: require('./assets/images/profile/profile-wallet.png'),
    },
    promotions: {
      a: require('./assets/images/promotions/promotion-1.png'),
      b: require('./assets/images/promotions/promotion-2.png'),
      c: require('./assets/images/promotions/promotion-3.png'),
      d: require('./assets/images/promotions/promotion-4.png'),
      icons: {
        coupon: promotionCoupon,
        history: promotionHistory,
        reward: promotionReward,
      },
      empty: require('./assets/images/promotions/promotions-empty.png'),
    },
    register: {
      corporateRegister: require('./assets/images/register/corporate-register.png'),
      generalRegister: require('./assets/images/register/general-register.png'),
    },
    service: {
      detailMock: require('./assets/images/service/service-detail-mock.png'),
      logo: require('./assets/images/service/service-logo.png'),
      mock: require('./assets/images/service/service-mock.png'),
    },
    sparkles: {
      bottom: require('./assets/images/sparkles-bottom.png'),
      bottomLeft: require('./assets/images/sparkles-bottom-left.png'),
      bottomRight: require('./assets/images/sparkles-bottom-right.png'),
      right: require('./assets/images/sparkles-right.png'),
      top: require('./assets/images/sparkles-top.png'),
      topLeft: require('./assets/images/sparkles-top-left.png'),
      topRight: require('./assets/images/sparkles-top-right.png'),
    },
  };
}
