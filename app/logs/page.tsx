"use client";
import LogComponentSet from "@/components/content-components/log-components";
import { Page } from "@/components/whole-page-export";
import React from "react";

export default function MainPage() {

    return (
        <>
            <Page showVideo={false} showBgPictures={true} hoverVisible={false}>
                <LogComponentSet></LogComponentSet>
            </Page>
        </>
    );
}