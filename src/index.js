import React from 'react';
import { injectIntl } from 'react-intl';
import sanitizeHtml from 'sanitize-html';

class SafeHTMLMessage extends React.Component {
  render () {
    const {intl, id, values} = this.props;
    const msg = intl.formatHTMLMessage({id}, values);
    return (<span dangerouslySetInnerHTML={{ __html: sanitizeHtml(msg) }}></span>);
  }
}
export default injectIntl(SafeHTMLMessage);
