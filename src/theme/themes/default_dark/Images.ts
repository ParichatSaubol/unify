/**
 * Images should be stored in the `App/Images` directory and referenced using variables defined here.
 */

interface TImages {
  logo: any;
}

const Images: () => TImages = () => {
  return {
    logo: require('../../assets/images/brand/brand.png'),
  };
};

export default Images;
