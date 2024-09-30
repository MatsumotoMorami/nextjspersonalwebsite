"use client";
import BlogComponentSet from "@/components/content-components/blog-components";
import { Page } from "@/components/whole-page-export";

export default function MainPage() {

    return (
        <>
            <Page showVideo={false} showBgPictures={true} hoverVisible={false}>
                <BlogComponentSet></BlogComponentSet>
            </Page>
        </>
    );
}