"use client";
import IntroPageComponentSet from "@/components/content-components/intropage-components";
import { Page } from "@/components/whole-page-export";

export default function MainPage() {

    return (
        <>
            <Page showVideo={false} showBgPictures={true}>
                <IntroPageComponentSet></IntroPageComponentSet>
            </Page>
        </>
    );
}