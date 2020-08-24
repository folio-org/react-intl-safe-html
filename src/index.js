import React from 'react';
import { FormattedMessage } from 'react-intl';

const SafeHTMLMessage = ({
  id,
  tagName,
  values,
}) => (
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
      ...values,
    }}
  />
);

export default SafeHTMLMessage;
