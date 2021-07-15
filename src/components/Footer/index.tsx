import { useIntl } from 'umi';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '宽脑门信息技术有限公司',
  });

  return (
    <DefaultFooter
      copyright={`2020 ${defaultMessage}`}
      links={[
        {
          key: 'Donech',
          title: 'Donech',
          href: 'https://www.donech.com',
          blankTarget: true,
        },
      ]}
    />
  );
};
