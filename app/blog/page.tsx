"use client";
import BlogComponentSet from "@/components/content-components/blog-components";
import FrontPageComponentSet from "@/components/content-components/frontpage-components";
import { Page } from "@/components/whole-page-export";

export default function MainPage() {

    return (
        <>
            <Page showVideo={false} showBgPictures={true}>
                <BlogComponentSet></BlogComponentSet>

            </Page>
        </>
    );
}