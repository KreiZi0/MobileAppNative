import {StyleSheet} from 'react-native';

import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
      marginBottom: 20,
    },
    inputContainer: {
      borderWidth: 1,
      borderColor: colors.grey,
      borderRadius: 14,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      paddingHorizontal: 16,
      paddingVertical: 20,
      flex: 1,
      // Additional styles...
    },
    label: {
      marginBottom: 8,
      color: colors.blue,
      fontWeight: '500',
      // Additional styles...
    },
    
    eye: {
      width: 24,
      height: 24,
      marginHorizontal: 16,
      // Additional styles...
    },
    arrow: {
      width: 24,
      height: 24,
      marginHorizontal: 16,
      transform: [{rotate: '270deg'}],
      // Additional styles...
    },
    placeholder: {
      paddingHorizontal: 16,
      paddingVertical: 20,
      flex: 1,
      color: colors.lightGrey,
      // Additional styles...
    },
    // Add comments for clarity and organization
    modalWrapper: {
      backgroundColor: 'rgba(0,0,0,0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      // Additional styles...
    },
    modalContent: {
      backgroundColor: colors.white,
      borderRadius: 8,
      padding: 16,
      // Additional styles...
    },
    optionTitle: {
      color: colors.black,
      marginBottom: 16,
      fontSize: 16,
      // Additional styles...
    },
    optionText: {
      color: colors.black,
      marginBottom: 4,
      fontSize: 15,
      // Additional styles...
    },
    selectedOption: {
      color: colors.blue,
      fontWeight: 'bold',
      // Additional styles...
    },
  });
  