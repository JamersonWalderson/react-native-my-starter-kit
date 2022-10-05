import React, { memo } from 'react';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from '../../../global/styles/theme';

type Props = React.ComponentProps<typeof PaperButton>;

/**
 * https://callstack.github.io/react-native-paper/button.html
 */

const Button = ({style, children, ...props }: Props) => (
  <>
    <PaperButton
      style={{width: '100%', height: 40, marginTop: 20, backgroundColor: theme.colors.primary, borderRadius: 10}}
      labelStyle={{color: '#E5E5E5'}}
      mode='outlined'
      uppercase={true}
      {...props}
    >
      {children}
    </PaperButton>
  </>
)

export default memo(Button);