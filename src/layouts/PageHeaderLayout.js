import React from 'react';
import Link from 'umi/link';
import PageHeader from '@/components/PageHeader';
import styles from './PageHeaderLayout.less';

export default ({ children, wrapperClassName, top, ...restProps }) => (
  <div
    style={{ margin: '-24px -24px 0', display: 'flex', flexDirection: 'column', height: '100%' }}
    className={wrapperClassName}
  >
    {top}
    <PageHeader {...restProps} linkElement={Link} />
    {children ? <div className={styles.content}>{children}</div> : null}
  </div>
);
