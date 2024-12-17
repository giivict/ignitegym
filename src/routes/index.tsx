import { useContext } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Box } from "@gluestack-ui/themed";

import { useAuth } from "@hooks/useAuth"; 

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

import { gluestackUIConfig } from "../../config/gluestack-ui.config";

export function Routes() {
    const theme = DefaultTheme
    theme.colors.background = gluestackUIConfig.tokens.colors.gray700

    const { user } = useAuth();


    console.log("USUÁRIO LOGADO =>", user)

    return (
        <Box flex={1} bg="$gray700">
            <NavigationContainer theme={theme}>
                <AuthRoutes />
            </NavigationContainer>
        </Box>
    )
}