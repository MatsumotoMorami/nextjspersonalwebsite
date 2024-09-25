"use client";
import FrontPageComponentSet from "@/components/frontpage-components";
import { Page } from "@/components/whole-page-export";

export default function MainPage() {

    return (
        <>
            <Page showVideo={false} showBgPictures={true}>
                <FrontPageComponentSet></FrontPageComponentSet>
            </Page>
        </>
    );
}