import React from 'react';
import {TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import IconType, {FontType} from '@conts/IconType';

/**
 * 字体图标按钮
 * @param props name: https://oblador.github.io/react-native-vector-icons/
 * @returns TouchableHighlight
 */
const IconButton = props => {
  const {name, color, size, style, onPress, type, disabled} = props;
  const Icon = IconType(type);
  const iconElement = <Icon name={name} color={color || 'black'} size={size || 24} />;
  return (
    <TouchableHighlight style={style} underlayColor={'transparent'} disabled={disabled} onPress={onPress}>
      <>{iconElement}</>
    </TouchableHighlight>
  );
};

IconButton.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

IconButton.defaultProps = {
  disabled: false,
  type: FontType.ionicons,
};

export default IconButton;
