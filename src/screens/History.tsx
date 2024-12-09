import { useState } from "react";
import { SectionList } from "react-native";
import { Heading, Text, VStack } from "@gluestack-ui/themed";

import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";

export function History() {
    const [exercises, setExercises] = useState([
        {
            title: "05.12.24",
            data: ["Puxada frontal", "Remada unilateral"],
        },

        {
            title: "06.12.24",
            data: ["Puxada frontal"],
        }
    ])

    return (
        <VStack flex={1}>
            <ScreenHeader title="Histórico" />

            <SectionList
                sections={exercises}
                keyExtractor={(item) => item}
                renderItem={() => <HistoryCard />}
                renderSectionHeader={({ section }) => (
                    <Heading
                        fontFamily="$heading"
                        color="$gray200"
                        fontSize="$md"
                        mt="$10"
                        mb="$3"
                    >
                        {section.title}
                    </Heading>
                )}
                style={{ paddingHorizontal: 32 }}
                contentContainerStyle = {
                    exercises.length === 0 && { flex: 1, justifyContent: "center"}
                }

                ListEmptyComponent={() => (
                    <Text color="$gray100" textAlign="center">
                        Não há exercicios registrado ainda. {"\n"}
                        Vamos fazer exercícios hoje? 
                    </Text>
                )}
                showsVerticalScrollIndicator={false}
            />


        </VStack>
    )
}