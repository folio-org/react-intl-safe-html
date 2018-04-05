import React from 'react';
import { injectIntl } from 'react-intl';
import sanitizeHtml from 'sanitize-html';

function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

class SafeHTMLMessage extends React.Component {
  render () {
    const {intl, id, values} = this.props;
    const msg = intl.formatHTMLMessage({id}, values);
    return (<span>{sanitizeHtml(htmlDecode(msg))}</span>);
  }
}
export default injectIntl(SafeHTMLMessage);
