import { ComponentProps } from "react";
import { Image } from "@gluestack-ui/themed";

type Props = ComponentProps<typeof Image>

export function UserPhoto ({ ...rest }: Props) {
    return (
        <Image rounded="$full" borderWidth="$2" borderColor="$gray100"
        backgroundColor="$gray" {...rest} />
    )
}