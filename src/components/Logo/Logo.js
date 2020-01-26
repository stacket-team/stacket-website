import React from 'react';
import logoMobile from 'assets/images/logo-mobile.svg';
import logoDesktop from 'assets/images/logo-desktop.svg';
import Icon from 'components/Icon/Icon';
import { useMediaQuery } from 'react-responsive';

const Logo = props => {
  const isDesktop = useMediaQuery({ minDeviceWidth: 1024 });

  return isDesktop ? (
    <Icon {...props} src={logoDesktop} />
  ) : (
    <Icon {...props} src={logoMobile} />
  );
};

export default Logo;
