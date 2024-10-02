"use client";
import { BlogListComponentSet } from "@/components/content-components/blog-components";
import { Page } from "@/components/whole-page-export";
import React from "react";

export default function MainPage() {
    return (
        <>
            <Page showVideo={false} showBgPictures={true} hoverVisible={false}>
                <BlogListComponentSet></BlogListComponentSet>
            </Page>
        </>
    );
}