import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import getMergedClassNames from '../../utils/getMergedClassNames';
import CloseIcon from 'react-material-icon-svg/dist/CloseIcon';

import styles from './style.scss';
import { BannerIcon } from './BannerIcon';

const cx = classNames.bind(styles);

const baseClass = 'banner';

export const Banner = props => {
  const {
    className,
    onClose,
    size,
    text,
    type,
    ...restProps
  } = props;

  const mergedWrapperClassNames = getMergedClassNames(
    cx({
      [`${baseClass}__close`]: true,
      [`${baseClass}__content--${size}`]: size,
      [`${baseClass}__wrapper--${type}`]: type,
      [`${baseClass}__wrapper`]: true,
      [`${baseClass}`]: true,
    }),
    className
  );

  return (
    <div className={mergedWrapperClassNames} {...restProps}>
      {
        onClose && <CloseIcon onClick={onClose} fill="#424d57" className={styles[`${baseClass}--icon__close`]}/>
      }
      <div className={styles[`${baseClass}__content--${size}`]}>
        <BannerIcon type={type} />
        <p>{text}</p>
      </div>      
    </div>
  );
}

Banner.propTypes = {
  onClose: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'warning', 'success', 'error']).isRequired,
};

Banner.defaultProps = {
  size: 'small',
  type: 'info',
};

export default Banner;
