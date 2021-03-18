import React from 'react';
import { FormattedMessage } from 'react-intl';

const SafeHTMLMessage = ({
  id,
  tagName,
  values,
}) => {
  console.warn('[DEPRECATION] <SafeHTMLMessage> is deprecated; use <FormattedMessage> from react-intl instead.');
  return (
    <FormattedMessage
      id={id}
      tagName={tagName}
      values={{
        b: (chunks) => <b>{chunks}</b>,
        i: (chunks) => <i>{chunks}</i>,
        em: (chunks) => <em>{chunks}</em>,
        strong: (chunks) => <strong>{chunks}</strong>,
        span: (chunks) => <span>{chunks}</span>,
        div: (chunks) => <div>{chunks}</div>,
        p: (chunks) => <p>{chunks}</p>,
        ul: (chunks) => <ul>{chunks}</ul>,
        ol: (chunks) => <ol>{chunks}</ol>,
        li: (chunks) => <li>{chunks}</li>,
        ...values,
      }}
    />
  );
};

export default SafeHTMLMessage;
