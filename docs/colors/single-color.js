import React from 'react';
import cx from 'classnames';
import * as PropTypes from 'prop-types';
import { getContrast } from 'polished';
import styles from './style.scss';

const MIN_CONTRAST_RATIO = 4;

export function SingleColor(props) {
  const {
    title,
    subtitle,
    color1,
    color2,
    backupDotColor,
    selected,
    inversed,
    feedbackText,
    onClick
  } = props;

  const mainColor = inversed ? color2 : color1;
  const subColor = inversed ? color1 : color2;

  const contrast1 = getContrast(mainColor, subColor);
  const contrast2 = getContrast(mainColor, backupDotColor);

  const contrastRatio = contrast1 > contrast2 ? contrast1 : contrast2;
  const dotColor = contrast1 > contrast2 ? subColor : backupDotColor;

  if (contrastRatio < MIN_CONTRAST_RATIO) {
    return null;
  }

  return (
    <div className={styles.colors__container}>
      <h4 className={styles.colors__name}>{title}</h4>
      <p className={styles.colors__hex}>{subtitle}</p>
      <p className={styles.colors__ratio}>{contrastRatio}</p>
      <div
        className={cx(styles.colors__box, {
          [styles['colors__box--selected']]: selected
        })}
        style={{ backgroundColor: mainColor }}
        data-color={mainColor}
        onClick={onClick}
      >
        <div
          className={cx(styles.colors__dot)}
          style={{ backgroundColor: dotColor }}
        />
        <div className={styles.colors__feedback}>{feedbackText}</div>
      </div>
    </div>
  );
}

SingleColor.defaultProps = {
  onClick: () => {},
  backupDotColor: '#fff'
};

SingleColor.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  backupDotColor: PropTypes.string,
  selected: PropTypes.bool,
  feedbackText: PropTypes.string,
  inversed: PropTypes.bool,
  onClick: PropTypes.func
};
