import { StyleSheet } from "react-native";
import { $COLORS } from "../../utils/index";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginHorizontal: 16,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: $COLORS.white,
    },
    body: {
      fontSize: 18,
      color: $COLORS.white,
    },
    counter: {
      fontSize: 14,
      color: $COLORS.white,
    },
    repoUserImg: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: $COLORS.blackWithOpacity(2),
    }
});

export default styles;