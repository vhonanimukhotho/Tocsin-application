import { StyleSheet } from 'react-native';
import {COLOURS} from '../../../../assets/utilities/COLOURS'
import { windowHeight, windowWidth } from '../../../../assets/utilities/Dimensions';

const styles = StyleSheet.create({
    container: {
        backgroundColor : COLOURS.SECONDARY,
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    text: {
        //fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
      },
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: '#ccc',
        borderRadius: 13,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      inputIcon: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        width: 50,
      },
      input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        //fontFamily: 'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
      },

      textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
      },
      color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        //fontFamily: 'Lato-Regular',
        color: 'grey',
      },
      navButton: {
        marginTop: 15,
      },
      navButtonText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#2e64e5',
        //fontFamily: 'Lato-Regular',
      },

      buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight/15,
        backgroundColor: '#2e64e5',
        backgroundColor: COLOURS.primary,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        //fontFamily: 'Lato-Regular',
    },

    socialButtonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 3,
      },
      iconWrapper: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      icon: {
        fontWeight: 'bold',
      },
      btnTxtWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      socialButtonText: {
        fontSize: 18,
        fontWeight: '400',
        //fontFamily: 'Lato-Regular',
      },

  });
  
export default styles;