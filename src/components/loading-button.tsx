import {FC} from 'react';
import {
  ActivityIndicator,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface LoadingButtonProps {
  isLoading?: boolean;
  onPress: () => void;
  isDisabled?: boolean;
  text: string;
  style?: StyleProp<ViewStyle>;
}

const LoadingButton: FC<LoadingButtonProps> = ({
  isLoading,
  isDisabled,
  text,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 2,
        },
        style,
        {
          opacity: isDisabled && !isLoading ? 0.5 : 1,
        },
      ]}
      disabled={isDisabled}
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text
          style={{
            fontWeight: '500',
          }}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default LoadingButton;
