import { createContext } from "react";
import { useColorScheme } from "react-native";
import { CampContextInterface } from "../interfaces/CampContextInterface";

export const CampContext = createContext<CampContextInterface>({colorScheme:"light"});

