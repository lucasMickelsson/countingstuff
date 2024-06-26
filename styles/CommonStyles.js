import { StyleSheet } from "react-native";

export const CommonStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "lightblue",
    borderWidth: 3,
    borderRadius: 5,
    margin: 5,
    paddingEnd: 20,
    paddingStart: 20,
  },
  textItem: {
    fontSize: 40,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5
  },
  inputContainer: {
    flex: 1, // Take up remaining space
    marginRight: 5, // Adjust spacing as needed
  },
  input: {
    borderColor: "lightblue",
    borderWidth: 3,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
});
