import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Center, Text, Heading, ScrollView, onChange } from "@gluestack-ui/themed";

import { AuthNavigationRoutesProps } from "@routes/auth.routes";

import { useAuth } from "@hooks/useAuth";

import BackgroundImg from "@assets/background.png"
import Logo from '@assets/logo.svg'

import { Input } from "@components/Input";
import { Button } from "@components/Button";

type FormData = {
    email: string;
    password: string;
}

export function SignIn() {
    const { signIn } = useAuth();

    const navigation = useNavigation<AuthNavigationRoutesProps>()

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>()

    function handleNewAccount() {
        navigation.navigate("signUp")
    }

    async function handleSignIn({ email, password }: FormData) {
        await signIn(email, password);
    }
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <VStack flex={1} >
                <Image
                    w="$full"
                    h={624}
                    source={BackgroundImg}
                    defaultSource={BackgroundImg}
                    alt="Pessoas treinando"
                    position="absolute"
                />
                <VStack flex={1} px="$10" pb="$16">
                    <Center my="$24">
                        <Logo />

                        <Text color="$gray100">
                            Treine sua mente e o seu corpo
                        </Text>
                    </Center>

                    <Center gap="$2">
                        <Heading color="$gray100"> Acesse a conta </Heading>


                        <Controller
                            control={control}
                            name="email"
                            rules={{ required: 'Informe o e-mail' }}
                            render={({ field: { onChange } }) =>
                                <Input
                                    placeholder="E-mail"
                                    keyboardType="email-address"
                                    onChangeText={onChange}
                                    errorMessage={errors.email?.message}
                                    autoCapitalize="none"
                                />
                            }
                        />

                        <Controller
                            control={control}
                            name="password"
                            rules={{ required: 'Informe a senha' }}
                            render={({ field: { onChange } }) =>
                                <Input
                                    secureTextEntry
                                    placeholder="Senha"
                                    onChangeText={onChange}
                                    errorMessage={errors.password?.message}

                                />
                            }
                        />



                        <Button title="Acessar" onPress={handleSubmit(handleSignIn)} />
                    </Center>

                    <Center flex={1} justifyContent="flex-end" mt="$4">

                        <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body"> Ainda não tem acesso? </Text>

                        <Button title="Criar Conta" variant="outline" onPress={handleNewAccount} />
                    </Center>
                </VStack>
            </VStack>
        </ScrollView>
    )
}