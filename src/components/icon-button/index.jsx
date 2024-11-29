import React, { memo } from 'react';
import { IconButtonWapper } from './style';
import classNames from 'classnames';
const IconButton = memo(
  ({
    icon,
    text,
    onClick,
    className, // 添加自定义className
    iconClassName, // 图标样式
    textClassName, // 文本样式
    style, // 容器样式
    iconStyle, // 图标样式
    textStyle, // 文本样式
    hoverEffect = false,
  }) => {
    return (
      <IconButtonWapper
        onClick={onClick}
        className={className}
        style={style}
        $hoverEffect={hoverEffect}
      >
        <span className={classNames('icon', iconClassName)} style={iconStyle}>
          {icon}
        </span>
        <span className={classNames('text', textClassName)} style={textStyle}>
          {text}
        </span>
      </IconButtonWapper>
    );
  }
);

export default IconButton;
