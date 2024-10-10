"use client";
import DonateComponentSet from "@/components/content-components/donate-components";
import { Page } from "@/components/whole-page-export";

export default function MainPage() {

    return (
        <>
            <Page showVideo={false} showBgPictures={true} hoverVisible={false}>
                <DonateComponentSet></DonateComponentSet>
            </Page>
        </>
    );
}