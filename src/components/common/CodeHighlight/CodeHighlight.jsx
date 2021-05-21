import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';
import PropTypes from 'prop-types';

export const CodeHighlight = (props) => {
  const className = props.children.props.className || '';
  const matches = className.match(/language-(?<lang>.*)/);
  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ''
      }
      theme={theme}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className}`}
          style={{
            ...style,
            padding: '15px',
            overflowX: 'scroll',
            fontSize: '15px',
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

CodeHighlight.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
