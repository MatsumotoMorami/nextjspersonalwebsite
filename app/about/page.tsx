"use client";
import AboutComponentSet from "@/components/content-components/about-components";
import FrontPageComponentSet from "@/components/content-components/frontpage-components";
import { Page } from "@/components/whole-page-export";
import React from "react";

export default function MainPage() {

    return (
        <>
            <Page showVideo={false} showBgPictures={true} hoverVisible={false} >
                <AboutComponentSet></AboutComponentSet>
            </Page>
        </>
    );
}