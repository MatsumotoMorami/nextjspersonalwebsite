"use client";
import IntroPageComponentSet from "@/components/content-components/intropage-components";
import { Page } from "@/components/whole-page-export";
import React from "react";

export default function MainPage() {

    return (
        <>
            <Page showVideo={false} showBgPictures={true} hoverVisible={false}>
                <IntroPageComponentSet></IntroPageComponentSet>
            </Page>
        </>
    );
}